import {AfterViewInit, Component} from '@angular/core';
import {
  ApiWebsocket,
  PacifistaSupportTicketDTO,
  PacifistaSupportTicketMessageDTO,
  PacifistaSupportTicketMessageService,
  PacifistaSupportTicketMessageWebsocketService,
  PacifistaSupportTicketService,
  PageOption,
  Paginated,
  QueryBuilder,
  QueryParam,
  TicketStatus,
  UserAuthService,
  UserDTO,
  UserRole
} from "@funixproductions/funixproductions-requests";
import NotificationsService from "../../../../../services/NotificationService";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-ticket-messaging',
  templateUrl: './ticket-messaging.component.html',
  styleUrls: ['./ticket-messaging.component.css']
})
export class TicketMessagingComponent implements AfterViewInit {

  private static readonly SUBSCRIBE_TICKET_MESSAGE: string = 'subscribe-channel';
  private static readonly MESSAGE_EVENT: string = 'ticket-message-event';

  private websocketService: PacifistaSupportTicketMessageWebsocketService;
  private ticketMessageService: PacifistaSupportTicketMessageService;
  private ticketService: PacifistaSupportTicketService;
  private authService: UserAuthService;

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  ticketId?: string;
  actualUser?: UserDTO;
  messages: PacifistaSupportTicketMessageDTO[] = [];
  messageInput: string = '';

  constructor(httpClient: HttpClient,
              private notificationService: NotificationsService,
              private recaptchaService: ReCaptchaV3Service,
              private route: ActivatedRoute) {
    this.websocketService = new PacifistaSupportTicketMessageWebsocketService(environment.production);
    this.ticketMessageService = new PacifistaSupportTicketMessageService(httpClient, environment.production);
    this.ticketService = new PacifistaSupportTicketService(httpClient, environment.production);
    this.authService = new UserAuthService(httpClient, environment.production);
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const ticketId = params['ticket-id'];

      if (ticketId) {
        this.ticketId = ticketId;
        this.fetchCurrentUser();
        this.initWebsocket();
      } else {
        this.notificationService.error('Aucun ticket sélectionné.');
      }
    });
  }

  postNewMessage(): void {
    if (this.messageInput.length === 0) {
      this.notificationService.warning('Vous ne pouvez pas envoyer un message vide.');
      return;
    }

    const messageDTO: PacifistaSupportTicketMessageDTO = new PacifistaSupportTicketMessageDTO();
    messageDTO.ticket = new PacifistaSupportTicketDTO();
    messageDTO.ticket.id = this.ticketId;
    messageDTO.message = this.messageInput;

    if (this.actualUser && this.actualUser.role) {
      if (this.actualUser.role === UserRole.PACIFISTA_MODERATOR || this.actualUser.role === UserRole.PACIFISTA_ADMIN || this.actualUser.role === UserRole.ADMIN) {
        this.postStaffMessage(messageDTO);
      } else {
        this.postUserMessage(messageDTO);
      }
    } else {
      this.notificationService.error('Utilisateur non connecté.');
    }
  }

  closeTicket(): void {
    if (this.ticketId) {
      this.ticketService.getById(this.ticketId).subscribe({
        next: ticket => {
          ticket.status = TicketStatus.SOLVED;

          this.ticketService.patch(ticket).subscribe({
            next: () => {
              this.notificationService.success('Ticket fermé avec succès.');
            },
            error: errorPatch => {
              this.notificationService.onErrorRequest(errorPatch);
            }
          });
        },
        error: error => {
          this.notificationService.onErrorRequest(error);
        }
      });
    }
  }

  isActualUserIsStaff(): boolean {
    return this.actualUser !== undefined && this.actualUser.role !== undefined && (this.actualUser.role === UserRole.PACIFISTA_MODERATOR ||
      this.actualUser.role === UserRole.PACIFISTA_ADMIN || this.actualUser.role === UserRole.ADMIN);
  }

  isOwnMessage(message: PacifistaSupportTicketMessageDTO): boolean {
    return this.actualUser !== undefined && message.writtenById !== undefined && this.actualUser.id === message.writtenById;
  }

  private initWebsocket(): void {
    this.websocketService.connect().subscribe({
      next: (messageWs: string) => {
        if (messageWs === ApiWebsocket.CONNECTED_STATE) {
          this.websocketService.sendMessage(TicketMessagingComponent.SUBSCRIBE_TICKET_MESSAGE + ':' + this.ticketId);
        } else if (messageWs.startsWith(TicketMessagingComponent.MESSAGE_EVENT)) {
          const message: PacifistaSupportTicketMessageDTO = JSON.parse(messageWs.substring(TicketMessagingComponent.MESSAGE_EVENT.length + 1)) as PacifistaSupportTicketMessageDTO;
          this.messages.push(message);
        }
      },
      complete: () => {
        this.initWebsocket();
      }
    })
  }

  private postStaffMessage(messageDTO: PacifistaSupportTicketMessageDTO): void {
    messageDTO.writtenById = this.actualUser?.id;
    messageDTO.writtenByName = this.actualUser?.username;

    this.ticketMessageService.create(messageDTO).subscribe({
      next: ticketMessage => {
        this.messageInput = '';
        this.updateTicketStatusToInProgress(ticketMessage);
      },
      error: error => {
        this.notificationService.onErrorRequest(error);
      }
    });
  }

  private updateTicketStatusToInProgress(ticketMessage: PacifistaSupportTicketMessageDTO): void {
    if (ticketMessage.ticket && ticketMessage.ticket.status && ticketMessage.ticket.status === TicketStatus.CREATED) {
      const ticket = ticketMessage.ticket;
      ticket.status = TicketStatus.IN_PROGRESS;

      this.ticketService.patch(ticket).subscribe({
        error: errorPatch => {
          this.notificationService.onErrorRequest(errorPatch);
        }
      });
    }
  }

  private postUserMessage(messageDTO: PacifistaSupportTicketMessageDTO): void {
    this.recaptchaService.execute('pacifistasupportticketmessage').subscribe({
      next: captchaCode => {
        this.ticketMessageService.createTicketMessageFromWeb(messageDTO, captchaCode).subscribe({
          next: () => {
            this.messageInput = '';
          },
          error: error => {
            this.notificationService.onErrorRequest(error);
          }
        });
      },
      error: () => {
        this.notificationService.error('La vérification captcha (anti robot) a échouée.');
      }
    });
  }

  private fetchCurrentUser(): void {
    this.authService.currentUser().subscribe({
      next: user => {
        this.actualUser = user;
        this.fetchTicketMessages();
      },
      error: error => {
        this.notificationService.onErrorRequest(error);
      }
    });
  }

  private fetchTicketMessages(): void {
    if (this.actualUser && this.actualUser.role) {
      if (this.actualUser.role === UserRole.PACIFISTA_MODERATOR || this.actualUser.role === UserRole.PACIFISTA_ADMIN || this.actualUser.role === UserRole.ADMIN) {
        this.fetchStaffMessages();
      } else {
        this.fetchUserMessages();
      }
    } else {
      this.notificationService.error('Utilisateur non connecté.');
    }
  }

  private fetchUserMessages(): void {
    if (this.ticketId) {
      this.ticketMessageService.fetchUserTicketMessages(0, 300, this.ticketId).subscribe({
        next: (messages: Paginated<PacifistaSupportTicketMessageDTO>) => {
          this.messages = messages.content;
        },
        error: error => {
          this.notificationService.onErrorRequest(error);
        }
      });
    }
  }

  private fetchStaffMessages(): void {
    if (this.ticketId) {
      const pageOption: PageOption = new PageOption();
      pageOption.page = 0;
      pageOption.elemsPerPage = 300;
      pageOption.sort = 'createdAt:asc';

      const queryBuilder: QueryBuilder = new QueryBuilder();
      const queryParam: QueryParam = new QueryParam();
      queryParam.key = 'ticket.uuid';
      queryParam.type = QueryBuilder.equal;
      queryParam.value = this.ticketId;
      queryBuilder.addParam(queryParam);

      this.ticketMessageService.find(pageOption, queryBuilder).subscribe({
        next: (messages: Paginated<PacifistaSupportTicketMessageDTO>) => {
          this.messages = messages.content;
        },
        error: error => {
          this.notificationService.onErrorRequest(error);
        }
      });
    }
  }

}
