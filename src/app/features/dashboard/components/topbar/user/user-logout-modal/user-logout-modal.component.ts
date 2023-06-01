import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserAuthService} from "../../../../../../services/funixproductions-api/user/services/user-auth-service";
import NotificationsService from "../../../../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-user-logout-modal',
  templateUrl: './user-logout-modal.component.html',
  styleUrls: ['./user-logout-modal.component.css']
})
export class UserLogoutModalComponent {

  constructor(public dialogRef: MatDialogRef<UserLogoutModalComponent>,
              private authService: UserAuthService,
              private notificationService: NotificationsService) {
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
