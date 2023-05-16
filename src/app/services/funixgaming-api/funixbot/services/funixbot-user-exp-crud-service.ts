import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {FunixbotUserExpDto} from "../dtos/funixbot-user-exp-dto";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FunixbotUserExpCrudService extends CrudHttpClient<FunixbotUserExpDto> {

  override path: string = 'funixbot/user/exp'

}
