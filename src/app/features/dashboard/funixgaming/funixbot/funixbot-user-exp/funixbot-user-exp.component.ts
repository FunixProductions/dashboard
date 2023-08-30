import {Component} from '@angular/core';
import {FunixbotUserExpDto} from "../../../../../services/funixgaming-api/funixbot/dtos/funixbot-user-exp-dto";
import {
  FunixbotUserExpCrudService
} from "../../../../../services/funixgaming-api/funixbot/services/funixbot-user-exp-crud-service";
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";

@Component({
  selector: 'app-funixbot-user-exp',
  templateUrl: './funixbot-user-exp.component.html',
  styleUrls: ['./funixbot-user-exp.component.css']
})
export class FunixbotUserExpComponent extends ListComponent<FunixbotUserExpDto, FunixbotUserExpCrudService> {

  columnsToDisplay = ['twitchUsername', 'twitch-user-id', 'level', 'xp', 'xp-next-level', 'actions'];

  constructor(funixBotUserExpService: FunixbotUserExpCrudService) {
    super(funixBotUserExpService);
    super.pageOption.sort = 'level:desc,xp:desc';
    super.updateList();
  }

}
