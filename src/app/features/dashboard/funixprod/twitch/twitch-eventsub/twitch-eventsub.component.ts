import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TwitchEventsubModalComponent} from "../twitch-eventsub-modal/twitch-eventsub-modal.component";
import {Condition, TwitchEventSubListDTO, TwitchEventsubService} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-twitch-eventsub',
  templateUrl: './twitch-eventsub.component.html',
  styleUrls: ['./twitch-eventsub.component.css']
})
export class TwitchEventsubComponent {

  columnsToDisplay = ['status', 'type', 'condition', 'created_at', 'cost'];
  private readonly twitchEventSubService: TwitchEventsubService;
  twitchEventSubs: TwitchEventSubListDTO = new TwitchEventSubListDTO();

  constructor(httpClient: HttpClient,
              private dialog: MatDialog) {
    this.twitchEventSubService = new TwitchEventsubService(httpClient, environment.production);
    this.updateList();
  }

  openCreationModal(): void {
    const dialogRef = this.dialog.open(TwitchEventsubModalComponent, {
      data: {
        creation: true
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openRemoveModal(): void {
    const dialogRef = this.dialog.open(TwitchEventsubModalComponent, {
      data: {
        creation: false
      }
    });

    dialogRef.afterClosed().subscribe(() => {
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
