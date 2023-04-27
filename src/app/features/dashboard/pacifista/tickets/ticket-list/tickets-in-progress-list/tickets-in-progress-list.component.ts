import {Component} from '@angular/core';
import PacifistaSupportTicketDTO, {
  TicketStatus
} from "../../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import {ListComponent} from "../../../../../../services/core/components/lists/ListComponent";
import PacifistaSupportTicketService
  from "../../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import {Paginated} from "../../../../../../services/core/dtos/paginated";

@Component({
  selector: 'app-tickets-in-progress-list',
  templateUrl: './tickets-in-progress-list.component.html',
  styleUrls: ['./tickets-in-progress-list.component.css']
})
export class TicketsInProgressListComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  constructor(private ticketService: PacifistaSupportTicketService) {
    super(ticketService);
  }

  override updateList() {
    this.service.fetchUserTickets(this.page, this.elemsPerPage, [TicketStatus.IN_PROGRESS, TicketStatus.CREATED]).subscribe({
      next: (entitiesGot: Paginated<PacifistaSupportTicketDTO>) => {
        this.entities = entitiesGot;
      }
    });
  }

}
