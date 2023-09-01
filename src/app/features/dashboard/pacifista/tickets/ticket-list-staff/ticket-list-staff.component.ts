import {Component} from '@angular/core';
import {
  ListComponent,
  PacifistaSupportTicketDTO,
  PacifistaSupportTicketService,
  QueryBuilder,
  TicketStatus
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-ticket-list-staff',
  templateUrl: './ticket-list-staff.component.html',
  styleUrls: ['./ticket-list-staff.component.css']
})
export class TicketListStaffComponent extends ListComponent<PacifistaSupportTicketDTO, PacifistaSupportTicketService> {

  columnsToDisplay = ['object', 'createdByName', 'ticketType', 'status', 'creationSource', 'createdAt', 'updatedAt', 'actions']

  pending: boolean = true;

  constructor(httpClient: HttpClient) {
    super(new PacifistaSupportTicketService(httpClient, environment.production));
    this.switchToPending();
  }

  switchToPending(pending: boolean = true) {
    super.onSearchChange('status', pending ? [TicketStatus.CREATED, TicketStatus.IN_PROGRESS] : TicketStatus.SOLVED, QueryBuilder.equal);
    this.pending = pending;
  }

}
