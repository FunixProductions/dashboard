import {Component} from '@angular/core';
import PacifistaSupportTicketDTO, {
  TicketStatus
} from "../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
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

  pending: boolean = true;

  constructor(private ticketService: PacifistaSupportTicketService) {
    super(ticketService);
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
