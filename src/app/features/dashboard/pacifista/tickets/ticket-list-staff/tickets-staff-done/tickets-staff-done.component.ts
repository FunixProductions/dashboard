import {Component} from '@angular/core';
import {ListComponent} from "../../../../../../services/core/components/lists/ListComponent";
import PacifistaSupportTicketDTO, {
  TicketStatus
} from "../../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import PacifistaSupportTicketService
  from "../../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import {QueryBuilder} from "../../../../../../utils/query.builder";

@Component({
  selector: 'app-tickets-staff-done',
  templateUrl: './tickets-staff-done.component.html',
  styleUrls: ['./tickets-staff-done.component.css']
})
export class TicketsStaffDoneComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  constructor(private ticketService: PacifistaSupportTicketService) {
    super(ticketService);
    super.onSearchChange('status', TicketStatus.SOLVED, QueryBuilder.equal);
  }

}
