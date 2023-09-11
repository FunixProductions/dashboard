import {Component} from '@angular/core';
import {FunixbotUserExpDto, FunixbotUserExpService, ListComponent} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-funixbot-user-exp',
  templateUrl: './funixbot-user-exp.component.html',
  styleUrls: ['./funixbot-user-exp.component.css']
})
export class FunixbotUserExpComponent extends ListComponent<FunixbotUserExpDto, FunixbotUserExpService> {

  columnsToDisplay = ['twitchUsername', 'twitch-user-id', 'level', 'xp', 'xp-next-level', 'actions'];

  constructor(httpClient: HttpClient) {
    super(new FunixbotUserExpService(httpClient, environment.production), 'level:desc,xp:desc');
  }

}
