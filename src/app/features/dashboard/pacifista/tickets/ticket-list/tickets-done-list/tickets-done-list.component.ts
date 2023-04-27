import {Component} from '@angular/core';
import {ListComponent} from "../../../../../../services/core/components/lists/ListComponent";
import PacifistaSupportTicketDTO, {
  TicketStatus
} from "../../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import PacifistaSupportTicketService
  from "../../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import {Paginated} from "../../../../../../services/core/dtos/paginated";

@Component({
  selector: 'app-tickets-done-list',
  templateUrl: './tickets-done-list.component.html',
  styleUrls: ['./tickets-done-list.component.css']
})
export class TicketsDoneListComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  constructor(private ticketService: PacifistaSupportTicketService) {
    super(ticketService);
  }

  override updateList() {
    this.service.fetchUserTickets(this.page, this.elemsPerPage, [TicketStatus.SOLVED]).subscribe({
      next: (entitiesGot: Paginated<PacifistaSupportTicketDTO>) => {
        this.entities = entitiesGot;
      }
    });
  }

}
