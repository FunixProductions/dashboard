import {Component} from '@angular/core';
import PacifistaSupportTicketDTO, {
  TicketType
} from "../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import PacifistaSupportTicketService
  from "../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import {ReCaptchaV3Service} from "ng-recaptcha";
import NotificationsService from "../../../../../services/core/services/NotificationsService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-creation',
  templateUrl: './ticket-creation.component.html',
  styleUrls: ['./ticket-creation.component.css']
})
export class TicketCreationComponent {

  object?: string;
  type?: TicketType;

  readonly ticketTypes = [
    {value: TicketType.OTHER, viewValue: 'Autre'},
    {value: TicketType.BUG, viewValue: 'Bug'},
    {value: TicketType.REPORT, viewValue: 'Report'},
    {value: TicketType.RECLAMATION, viewValue: 'Réclamation'},
    {value: TicketType.ONLINE_PURCHASE, viewValue: 'Achat en ligne'},
  ];

  constructor(protected ticketService: PacifistaSupportTicketService,
              protected captchaService: ReCaptchaV3Service,
              protected notificationService: NotificationsService,
              private router: Router) {
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
