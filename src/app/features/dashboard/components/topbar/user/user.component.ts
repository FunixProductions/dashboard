import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserLogoutModalComponent} from "./user-logout-modal/user-logout-modal.component";
import {UserDTO, UserJwtCheckerService} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  private readonly userDTO: UserDTO | null;

  constructor(private matDialog: MatDialog) {
    const jwtService = new UserJwtCheckerService();
    this.userDTO = jwtService.getUser();
  }

  public getUsername(): string | undefined {
    return this.userDTO?.username;
  }

  public openLogoutDialog(): void {
    this.matDialog.open(UserLogoutModalComponent);
  }
}
