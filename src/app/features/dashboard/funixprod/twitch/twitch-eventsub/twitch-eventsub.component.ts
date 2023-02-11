import { Component } from '@angular/core';
import {
  Condition,
  TwitchEventSubListDTO
} from "../../../../../dto/funix-api/external_api/twitch/eventsub/TwitchEventSubListDTO";
import {TwitchEventsubService} from "../../../../../services/funix-api/external_api/twitch/twitch-eventsub-service";
import {MatDialog} from "@angular/material/dialog";
import {TwitchEventsubModalComponent} from "../twitch-eventsub-modal/twitch-eventsub-modal.component";

@Component({
  selector: 'app-twitch-eventsub',
  templateUrl: './twitch-eventsub.component.html',
  styleUrls: ['./twitch-eventsub.component.css']
})
export class TwitchEventsubComponent {

  columnsToDisplay = ['status', 'type', 'condition', 'created_at', 'cost'];

  twitchEventSubs: TwitchEventSubListDTO = new TwitchEventSubListDTO();

  constructor(private twitchEventSubService: TwitchEventsubService,
              private dialog: MatDialog) {
    this.updateList();
  }

  openCreationModal(): void {
    const dialogRef = this.dialog.open(TwitchEventsubModalComponent, {
      data: {
        creation: true
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.updateList();
    });
  }

  openRemoveModal(): void {
    const dialogRef = this.dialog.open(TwitchEventsubModalComponent, {
      data: {
        creation: false
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.updateList();
    });
  }

  updateList(): void {
    this.twitchEventSubService.getAppSubscriptions().subscribe({
      next: value => {
        this.twitchEventSubs = value;
      }
    });
  }

  prettyPrintCondition(condition: Condition): string {
    let toSend: string = '';

    if (condition.broadcaster_user_id !== null) {
      toSend += '- streamerId:' + condition.broadcaster_user_id;
    }
    if (condition.moderator_user_id !== null) {
      toSend += ' - moderatorId: ' + condition.moderator_user_id;
    }
    if (condition.from_broadcaster_user_id !== null) {
      toSend += ' - fromStreamerId: ' + condition.from_broadcaster_user_id;
    }
    if (condition.to_broadcaster_user_id !== null) {
      toSend += ' - toStreamerId: ' + condition.to_broadcaster_user_id;
    }
    if (condition.reward_id !== null) {
      toSend += ' - rewardId: ' + condition.reward_id;
    }
    return toSend;
  }

}
