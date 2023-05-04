import {ApiWebsocket} from "../../../../core/components/websocket/ApiWebsocket";
import {environment} from "../../../../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class PacifistaSupportTicketMessageWebsocketService extends ApiWebsocket {

  protected override domain: string = environment.pacifistaWebsocketUrl;
  protected override path: string = 'support/ticket/message/web/ws'

}
