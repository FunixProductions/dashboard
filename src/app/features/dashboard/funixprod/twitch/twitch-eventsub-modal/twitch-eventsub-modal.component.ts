import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import NotificationsService from "../../../../../services/NotificationService";
import {TwitchEventsubService} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-twitch-eventsub-modal',
  templateUrl: './twitch-eventsub-modal.component.html',
  styleUrls: ['./twitch-eventsub-modal.component.css']
})
export class TwitchEventsubModalComponent {

  private readonly eventSubService: TwitchEventsubService;
  creation: boolean = false;
  streamerUsername = '';
  loading = false;

  constructor(private dialogRef: MatDialogRef<TwitchEventsubModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.eventSubService = new TwitchEventsubService(httpClient, environment.production);
    this.creation = data.creation;
  }

  onYesClick(): void {
    this.loading = true;

    if (this.creation) {
      this.eventSubService.createSubscription(this.streamerUsername).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close();
          this.notificationService.success('Notifications crées !');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
          this.loading = false;
        }
      });
    } else {
      this.eventSubService.deleteSubscription(this.streamerUsername).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close();
          this.notificationService.success('Notifications supprimées !');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
          this.loading = false;
        }
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
