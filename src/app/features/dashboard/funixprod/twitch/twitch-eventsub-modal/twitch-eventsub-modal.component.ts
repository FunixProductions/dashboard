import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  TwitchEventsubService
} from "../../../../../services/funixproductions-api/external_api/twitch/services/twitch-eventsub-service";
import NotificationsService from "../../../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-twitch-eventsub-modal',
  templateUrl: './twitch-eventsub-modal.component.html',
  styleUrls: ['./twitch-eventsub-modal.component.css']
})
export class TwitchEventsubModalComponent {

  creation: boolean = false;
  streamerUsername = '';
  loading = false;

  constructor(private dialogRef: MatDialogRef<TwitchEventsubModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private eventSubService: TwitchEventsubService,
              private notificationService: NotificationsService) {
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
