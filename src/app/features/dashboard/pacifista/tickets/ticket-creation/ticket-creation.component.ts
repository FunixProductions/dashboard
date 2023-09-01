import {Component} from '@angular/core';
import {ReCaptchaV3Service} from "ng-recaptcha";
import {Router} from "@angular/router";
import {
  PacifistaSupportTicketDTO,
  PacifistaSupportTicketService,
  TicketType
} from "@funixproductions/funixproductions-requests";
import NotificationsService from "../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-ticket-creation',
  templateUrl: './ticket-creation.component.html',
  styleUrls: ['./ticket-creation.component.css']
})
export class TicketCreationComponent {

  protected readonly ticketService: PacifistaSupportTicketService;
  object?: string;
  type?: TicketType;

  readonly ticketTypes = [
    {value: TicketType.OTHER, viewValue: 'Autre'},
    {value: TicketType.BUG, viewValue: 'Bug'},
    {value: TicketType.REPORT, viewValue: 'Report'},
    {value: TicketType.RECLAMATION, viewValue: 'Réclamation'},
    {value: TicketType.ONLINE_PURCHASE, viewValue: 'Achat en ligne'},
  ];

  constructor(httpClient: HttpClient,
              protected captchaService: ReCaptchaV3Service,
              protected notificationService: NotificationsService,
              private router: Router) {
    this.ticketService = new PacifistaSupportTicketService(httpClient, environment.production);
  }

  selectType(type: TicketType): void {
    this.type = type;
  }

  createTicket(): void {
    const ticket: PacifistaSupportTicketDTO = new PacifistaSupportTicketDTO();

    ticket.object = this.object;
    ticket.type = this.type;

    this.captchaService.execute('pacifistasupportticketcreate').subscribe({
      next: (token: string) => {
        this.ticketService.createTicketFromWeb(ticket, token).subscribe({
          next: (response: PacifistaSupportTicketDTO) => {
            this.router.navigate(['/dashboard/pacifista/tickets/messages', response.id]);
          },
          error: (error) => {
            this.notificationService.onErrorRequest(error);
          }
        });
      }
    })
  }

}
