import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {FunixbotCommandDto} from "../dtos/funixbot-command-dto";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FunixbotCommandsCrudService extends CrudHttpClient<FunixbotCommandDto> {

  override path: string = 'funixbot/command';

}
