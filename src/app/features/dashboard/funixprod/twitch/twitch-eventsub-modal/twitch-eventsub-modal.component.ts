import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TwitchEventsubService} from "../../../../../services/funix-api/external_api/twitch/services/twitch-eventsub-service";

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
              private eventSubService: TwitchEventsubService) {
    this.creation = data.creation;
  }

  onYesClick(): void {
    this.loading = true;

    if (this.creation) {
      this.eventSubService.createSubscription(this.streamerUsername).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close();
        },
        error: err => {
          this.loading = false;
        }
      });
    } else {
      this.eventSubService.deleteSubscription(this.streamerUsername).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close();
        },
        error: err => {
          this.loading = false;
        }
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
