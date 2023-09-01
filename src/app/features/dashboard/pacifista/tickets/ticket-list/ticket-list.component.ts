import {Component} from '@angular/core';
import {ListComponent, Paginated, TicketStatus} from "@funixproductions/funixproductions-requests";
import PacifistaSupportTicketService
    from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import PacifistaSupportTicketDTO
    from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  pending: boolean = true;

  constructor(httpClient: HttpClient) {
    super(new PacifistaSupportTicketService(httpClient, environment.production));
    this.switchToPending();
  }

  switchToPending(pending: boolean = true) {
    this.pending = pending;
    this.updateList();
  }

  override updateList() {
    this.service.fetchUserTickets(this.page, this.elemsPerPage, this.pending ? [TicketStatus.IN_PROGRESS, TicketStatus.CREATED] : [TicketStatus.SOLVED]).subscribe({
      next: (entitiesGot: Paginated<PacifistaSupportTicketDTO>) => {
        this.entities = entitiesGot;
      }
    });
  }

}
