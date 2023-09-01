import {Component} from '@angular/core';
import {
  FunixbotUserExpCrudService,
  FunixbotUserExpDto,
  ListComponent
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-funixbot-user-exp',
  templateUrl: './funixbot-user-exp.component.html',
  styleUrls: ['./funixbot-user-exp.component.css']
})
export class FunixbotUserExpComponent extends ListComponent<FunixbotUserExpDto, FunixbotUserExpCrudService> {

  columnsToDisplay = ['twitchUsername', 'twitch-user-id', 'level', 'xp', 'xp-next-level', 'actions'];

  constructor(httpClient: HttpClient) {
    super(new FunixbotUserExpCrudService(httpClient, environment.production), 'level:desc,xp:desc');
  }

}
