import {Component} from '@angular/core';
import PacifistaSupportTicketDTO
  from "../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import PacifistaSupportTicketService
  from "../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";
import {Paginated} from "../../../../../services/core/dtos/paginated";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  constructor(private ticketService: PacifistaSupportTicketService) {
    super(ticketService);
  }

  override updateList() {
    this.service.fetchUserTickets(this.page, this.elemsPerPage).subscribe({
      next: (entitiesGot: Paginated<PacifistaSupportTicketDTO>) => {
        this.entities = entitiesGot;
      }
    });
  }
}
