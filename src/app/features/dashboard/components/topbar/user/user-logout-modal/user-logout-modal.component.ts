import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserAuthService} from "@funixproductions/funixproductions-requests";
import NotificationsService from "../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-user-logout-modal',
  templateUrl: './user-logout-modal.component.html',
  styleUrls: ['./user-logout-modal.component.css']
})
export class UserLogoutModalComponent {

  private readonly authService: UserAuthService;

  constructor(public dialogRef: MatDialogRef<UserLogoutModalComponent>,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.authService = new UserAuthService(httpClient, environment.production);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.dialogRef.close();
        window.location.reload();
      },
      error: err => {
        this.notificationService.onErrorRequest(err);
      }
    });
  }

}
