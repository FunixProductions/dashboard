import {Component, OnInit} from '@angular/core';
import {UserTokenDTO} from "../../../../services/funixproductions-api/user/dtos/user-token-dto";
import {UserAuthService} from "../../../../services/funixproductions-api/user/services/user-auth-service";
import {Paginated} from "../../../../services/core/dtos/paginated";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {SessionRemoveModalComponent} from "./session-remove-modal/session-remove-modal.component";
import {FunixprodHttpClient} from "../../../../services/core/components/requests/funixprod-http-client";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  columnsToDisplay = ['createdAt', 'expirationDate', 'actions'];

  entities: Paginated<UserTokenDTO> = new Paginated<UserTokenDTO>();
  sort: string = 'createdAt:desc';
  page: number = 0;
  elemsPerPage: number = 30;

  constructor(private service: UserAuthService,
              private dialog: MatDialog) {
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
    this.service.getSessions(this.page.toString(), this.elemsPerPage.toString()).subscribe({
      next: (entitiesGot) => {
        this.entities = entitiesGot;
      }
    });
  }


}
