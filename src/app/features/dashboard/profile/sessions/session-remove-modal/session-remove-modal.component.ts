import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserAuthService} from "../../../../../services/funixproductions-api/user/services/user-auth-service";
import NotificationsService from "../../../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-session-remove-modal',
  templateUrl: './session-remove-modal.component.html',
  styleUrls: ['./session-remove-modal.component.css']
})
export class SessionRemoveModalComponent {

  constructor(public dialogRef: MatDialogRef<SessionRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notificationService: NotificationsService,
              private sessionService: UserAuthService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.sessionService.deleteSessions(this.data.session.id).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: (error) => {
        this.notificationService.onErrorRequest(error);
      }
    })
  }

}
