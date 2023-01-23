import {CrudHttpClient} from "../../crud-http-client";
import {FunixbotCommandDto} from "../../../dto/funix-api/funixbot/funixbot-command-dto";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FunixbotCommandsCrudService extends CrudHttpClient<FunixbotCommandDto> {

  override path: string = 'funixbot/command';

}
