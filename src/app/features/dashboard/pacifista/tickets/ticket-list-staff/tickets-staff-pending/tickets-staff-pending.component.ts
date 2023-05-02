import {Component} from '@angular/core';
import {ListComponent} from "../../../../../../services/core/components/lists/ListComponent";
import PacifistaSupportTicketDTO, {
  TicketStatus
} from "../../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import PacifistaSupportTicketService
  from "../../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import {QueryBuilder} from "../../../../../../utils/query.builder";

@Component({
  selector: 'app-tickets-staff-pending',
  templateUrl: './tickets-staff-pending.component.html',
  styleUrls: ['./tickets-staff-pending.component.css']
})
export class TicketsStaffPendingComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  constructor(private ticketService: PacifistaSupportTicketService) {
    super(ticketService);
    super.onSearchChange('status', [TicketStatus.CREATED, TicketStatus.IN_PROGRESS], QueryBuilder.equal);
  }

}
