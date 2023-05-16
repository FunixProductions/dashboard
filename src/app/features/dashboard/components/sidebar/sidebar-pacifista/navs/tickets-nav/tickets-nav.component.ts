import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../../SidebarService";
import {UserAuthService} from "../../../../../../../services/funixproductions-api/user/services/user-auth-service";
import PacifistaSupportTicketService
  from "../../../../../../../services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import PacifistaSupportTicketDTO, {
  TicketStatus
} from "../../../../../../../services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import {PageOption} from "../../../../../../../services/core/dtos/paginated";
import {QueryBuilder, QueryParam} from "../../../../../../../services/core/components/query.builder";
import NotificationsService from "../../../../../../../services/core/services/NotificationsService";
import {UserRole} from "../../../../../../../services/funixproductions-api/user/dtos/user-dto";

@Component({
  selector: 'app-tickets-nav',
  templateUrl: './tickets-nav.component.html',
  styleUrls: ['./tickets-nav.component.css']
})
export class TicketsNavComponent extends SidebarService implements OnInit {

  ticketsActive: PacifistaSupportTicketDTO[] = [];

  constructor(authService: UserAuthService,
              protected ticketService: PacifistaSupportTicketService,
              protected notificationService: NotificationsService) {
    super(authService);
  }

  ngOnInit(): void {
    this.authService.currentUser().subscribe({
      next: user => {
        if (user.role && (user.role === UserRole.PACIFISTA_ADMIN || user.role === UserRole.PACIFISTA_MODERATOR || user.role === UserRole.ADMIN)) {
          this.fetchAmountStaffActive();
        } else {
          this.fetchAmountUserActive();
        }
      }
    })
  }

  private fetchAmountUserActive(): void {
    this.ticketService.fetchUserTickets(0, 100, [TicketStatus.IN_PROGRESS, TicketStatus.CREATED]).subscribe({
      next: ticketsActive => {
        this.ticketsActive = ticketsActive.content;
      }
    })
  }

  private fetchAmountStaffActive(): void {
    const pageOption: PageOption = new PageOption();
    pageOption.page = 0;
    pageOption.elemsPerPage = 100;
    pageOption.sort = 'createdAt:desc';

    const queryBuilder: QueryBuilder = new QueryBuilder();
    const queryParam: QueryParam = new QueryParam();
    queryParam.key = 'status';
    queryParam.value = [TicketStatus.CREATED, TicketStatus.IN_PROGRESS]
    queryBuilder.addParam(queryParam);

    this.ticketService.find(pageOption, queryBuilder).subscribe({
      next: ticketsActive => {
        this.ticketsActive = ticketsActive.content;
      }
    });
  }

  protected readonly UserRole = UserRole;
}
