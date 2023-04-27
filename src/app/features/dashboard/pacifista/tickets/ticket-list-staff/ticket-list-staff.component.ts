import {Component} from '@angular/core';
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";
import PacifistaSupportTicketDTO, {
  TicketStatus
} from "../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import PacifistaSupportTicketService
  from "../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";

@Component({
  selector: 'app-ticket-list-staff',
  templateUrl: './ticket-list-staff.component.html',
  styleUrls: ['./ticket-list-staff.component.css']
})
export class TicketListStaffComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  constructor(private ticketService: PacifistaSupportTicketService) {
    super(ticketService);
  }

  switchListToOnlyActive(active: boolean): void {
    if (active) {
      this.onSearchChange('status', [TicketStatus.CREATED, TicketStatus.IN_PROGRESS]);
    } else {
      this.onSearchChange('status', '');
    }
  }

}
