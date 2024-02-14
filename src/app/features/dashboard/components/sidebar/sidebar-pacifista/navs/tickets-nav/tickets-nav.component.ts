import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../../SidebarService";
import {
  PacifistaSupportTicketDTO,
  PacifistaSupportTicketService,
  PageOption,
  QueryBuilder,
  QueryParam,
  TicketStatus,
  UserDTO,
  UserJwtCheckerService,
  UserRole
} from "@funixproductions/funixproductions-requests";
import NotificationsService from "../../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tickets-nav',
  templateUrl: './tickets-nav.component.html',
  styleUrls: ['./tickets-nav.component.css']
})
export class TicketsNavComponent extends SidebarService implements OnInit {

  private readonly jwtService: UserJwtCheckerService;
  protected readonly ticketService: PacifistaSupportTicketService;
  ticketsActive: PacifistaSupportTicketDTO[] = [];

  constructor(httpClient: HttpClient,
              router: Router,
              protected notificationService: NotificationsService) {
    super(router);
    this.ticketService = new PacifistaSupportTicketService(httpClient, environment.production);
    this.jwtService = new UserJwtCheckerService();
  }

  ngOnInit(): void {
    const user: UserDTO | null = this.jwtService.getUser();

    if (user && user.role && (user.role === UserRole.PACIFISTA_ADMIN || user.role === UserRole.PACIFISTA_MODERATOR || user.role === UserRole.ADMIN)) {
      this.fetchAmountStaffActive();
    } else {
      this.fetchAmountUserActive();
    }
  }

  protected currentUser(): UserDTO | null {
    return this.jwtService.getUser();
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
