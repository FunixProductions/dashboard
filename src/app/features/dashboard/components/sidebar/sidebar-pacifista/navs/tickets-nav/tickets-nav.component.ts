import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../../SidebarService";
import PacifistaSupportTicketDTO
    from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/support/tickets/dtos/PacifistaSupportTicketDTO";
import {
    PageOption,
    QueryBuilder,
    QueryParam,
    TicketStatus,
    UserAuthService,
    UserRole
} from "@funixproductions/funixproductions-requests";
import PacifistaSupportTicketService
    from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";
import NotificationsService from "../../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment";

@Component({
  selector: 'app-tickets-nav',
  templateUrl: './tickets-nav.component.html',
  styleUrls: ['./tickets-nav.component.css']
})
export class TicketsNavComponent extends SidebarService implements OnInit {

  protected readonly ticketService: PacifistaSupportTicketService;
  ticketsActive: PacifistaSupportTicketDTO[] = [];

  constructor(httpClient: HttpClient,
              protected notificationService: NotificationsService) {
    super(new UserAuthService(httpClient, environment.production));
    this.ticketService = new PacifistaSupportTicketService(httpClient, environment.production);
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
