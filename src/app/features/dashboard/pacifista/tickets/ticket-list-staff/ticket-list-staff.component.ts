import {Component} from '@angular/core';
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";
import PacifistaSupportTicketDTO, {
  TicketStatus
} from "../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import PacifistaSupportTicketService
  from "../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import {QueryBuilder} from "../../../../../services/core/components/query.builder";

@Component({
  selector: 'app-ticket-list-staff',
  templateUrl: './ticket-list-staff.component.html',
  styleUrls: ['./ticket-list-staff.component.css']
})
export class TicketListStaffComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  pending: boolean = true;

  constructor(private ticketService: PacifistaSupportTicketService) {
    super(ticketService);
    this.switchToPending();
  }

  switchToPending(pending: boolean = true) {
    super.onSearchChange('status', pending ? [TicketStatus.CREATED, TicketStatus.IN_PROGRESS] : TicketStatus.SOLVED, QueryBuilder.equal);
    this.pending = pending;
  }

}
