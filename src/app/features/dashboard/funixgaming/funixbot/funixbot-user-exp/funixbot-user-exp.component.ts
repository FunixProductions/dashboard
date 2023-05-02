import {Component} from '@angular/core';
import {FunixbotUserExpDto} from "../../../../../services/funix-api/funixbot/dtos/funixbot-user-exp-dto";
import {
  FunixbotUserExpCrudService
} from "../../../../../services/funix-api/funixbot/services/funixbot-user-exp-crud-service";
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";

@Component({
  selector: 'app-funixbot-user-exp',
  templateUrl: './funixbot-user-exp.component.html',
  styleUrls: ['./funixbot-user-exp.component.css']
})
export class FunixbotUserExpComponent extends ListComponent<FunixbotUserExpDto, FunixbotUserExpCrudService> {

  columnsToDisplay = ['twitch-user-id', 'level', 'xp', 'xp-next-level', 'actions'];

  constructor(private funixBotUserExpService: FunixbotUserExpCrudService) {
    super(funixBotUserExpService);
  }

}
