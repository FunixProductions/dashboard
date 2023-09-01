import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import NotificationsService from "../../../../../services/NotificationService";
import {UserAuthService} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-session-remove-modal',
  templateUrl: './session-remove-modal.component.html',
  styleUrls: ['./session-remove-modal.component.css']
})
export class SessionRemoveModalComponent {

  private readonly sessionService: UserAuthService;

  constructor(public dialogRef: MatDialogRef<SessionRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notificationService: NotificationsService,
              httpClient: HttpClient) {
    this.sessionService = new UserAuthService(httpClient, environment.production);
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
