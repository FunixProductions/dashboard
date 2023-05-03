import {AfterViewInit, Component} from '@angular/core';
import PacifistaSupportTicketMessageDTO
  from "../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketMessageDTO";
import PacifistaSupportTicketMessageService
  from "../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketMessageService";
import {ActivatedRoute} from "@angular/router";
import NotificationsService from "../../../../../services/core/services/NotificationsService";
import {UserDTO, UserRole} from "../../../../../services/funix-api/user/dtos/user-dto";
import {UserAuthService} from "../../../../../services/funix-api/user/services/user-auth-service";
import {PageOption, Paginated} from "../../../../../services/core/dtos/paginated";
import {QueryBuilder, QueryParam} from "../../../../../utils/query.builder";
import PacifistaSupportTicketDTO
  from "../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import {ReCaptchaV3Service} from "ng-recaptcha";

@Component({
  selector: 'app-ticket-messaging',
  templateUrl: './ticket-messaging.component.html',
  styleUrls: ['./ticket-messaging.component.css']
})
export class TicketMessagingComponent implements AfterViewInit {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  ticketId?: string;
  actualUser?: UserDTO;
  messages: PacifistaSupportTicketMessageDTO[] = [];
  messageInput: string = '';

  constructor(private ticketMessageService: PacifistaSupportTicketMessageService,
              private notificationService: NotificationsService,
              private recaptchaService: ReCaptchaV3Service,
              private authService: UserAuthService,
              private route: ActivatedRoute) {
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

  private postStaffMessage(messageDTO: PacifistaSupportTicketMessageDTO): void {
    messageDTO.writtenById = this.actualUser?.id;
    messageDTO.writtenByName = this.actualUser?.username;

    this.ticketMessageService.create(messageDTO).subscribe({
      next: () => {
        this.messageInput = '';
      },
      error: error => {
        this.notificationService.onErrorRequest(error);
      }
    });
  }

  private postUserMessage(messageDTO: PacifistaSupportTicketMessageDTO): void {
    this.recaptchaService.execute('pacifista-support-ticket-message').subscribe({
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

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const ticketId = params['ticket-id'];

      if (ticketId) {
        this.ticketId = ticketId;
        this.fetchCurrentUser();
      } else {
        this.notificationService.error('Aucun ticket sélectionné.');
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
      pageOption.sort = 'createdAt:desc';

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
