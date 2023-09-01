import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserLogoutModalComponent} from "./user-logout-modal/user-logout-modal.component";
import {HttpClient} from "@angular/common/http";
import {UserAuthService, UserDTO} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit {
  private readonly authService: UserAuthService;
  private userDTO: UserDTO = new UserDTO();

  constructor(httpClient: HttpClient,
              private matDialog: MatDialog) {
    this.authService = new UserAuthService(httpClient, environment.production);
  }

  ngAfterViewInit(): void {
    this.authService.currentUser().subscribe({
      next: (user: UserDTO) => {
        this.userDTO = user;
      }
    });
  }

  public getUsername(): string | undefined {
    return this.userDTO.username;
  }

  public openLogoutDialog(): void {
    this.matDialog.open(UserLogoutModalComponent);
  }
}
