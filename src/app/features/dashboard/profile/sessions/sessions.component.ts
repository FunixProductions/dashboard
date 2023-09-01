import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {SessionRemoveModalComponent} from "./session-remove-modal/session-remove-modal.component";
import {
    FunixprodHttpClient,
    Paginated,
    UserAuthService,
    UserTokenDTO
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  private readonly userAuthService: UserAuthService;
  columnsToDisplay = ['createdAt', 'expirationDate', 'actions'];

  entities: Paginated<UserTokenDTO> = new Paginated<UserTokenDTO>();
  sort: string = 'createdAt:desc';
  page: number = 0;
  elemsPerPage: number = 30;

  constructor(httpClient: HttpClient,
              private dialog: MatDialog) {
    this.userAuthService = new UserAuthService(httpClient, environment.production);
  }

  ngOnInit(): void {
    this.updateList();
  }

  onPaginateChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.updateList();
  }

  openRemoveDialog(session: UserTokenDTO): void {
    const dialogRef = this.dialog.open(SessionRemoveModalComponent, {
      data: {
        session: session
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  isCurrentSession(session: UserTokenDTO): boolean {
    const sessionToken = localStorage.getItem(FunixprodHttpClient.accessTokenLocalStorageName);
    return sessionToken !== null && session.token === sessionToken;
  }

  updateList(): void {
    this.userAuthService.getSessions(this.page.toString(), this.elemsPerPage.toString()).subscribe({
      next: (entitiesGot) => {
        this.entities = entitiesGot;
      }
    });
  }


}
