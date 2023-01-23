import {CrudHttpClient} from "../../crud-http-client";
import {FunixbotUserExpDto} from "../../../dto/funix-api/funixbot/funixbot-user-exp-dto";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FunixbotUserExpCrudService extends CrudHttpClient<FunixbotUserExpDto> {

  override path: string = 'funixbot/user/exp'

}
