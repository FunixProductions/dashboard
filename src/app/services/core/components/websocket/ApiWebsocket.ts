import {FunixprodHttpClient} from "../requests/funixprod-http-client";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";

export abstract class ApiWebsocket extends FunixprodHttpClient {

  public static readonly CONNECTED_STATE: string = 'CONNECTED_TO_ENDPOINT';
  public static readonly PASS_AUTH_TOKEN: string = 'pass-bearer-token';

  protected socket?: WebSocket;
  protected domain: string = environment.funixproductionsWebsocketUrl;
  protected path: string = '';

  public connect(): Observable<string> {
    const bearerToken: string | null = this.getBearer();
    const header = 'Bearer ' + (bearerToken === null ? '' : bearerToken);

    this.socket = new WebSocket(this.domain + this.path);

    return new Observable((observer) => {
      if (this.socket) {
        this.socket.onmessage = (event: MessageEvent) => {
          const data: string = event.data;

          if (data.startsWith('ping')) {
            this.handlePing(data);
          } else {
            observer.next(data);
          }
        };
        this.socket.onclose = () => {
          observer.complete();
        };
        this.socket.onopen = () => {
          this.sendMessage(ApiWebsocket.PASS_AUTH_TOKEN + ':' + header);
          observer.next(ApiWebsocket.CONNECTED_STATE);
        }
        this.socket.onerror = (event: Event) => {
          console.error('WebSocket error (' + this.domain + this.path + ') observed: ', event);
        };
      }
    });
  }

  public sendMessage(message: string): void {
    if (this.socket) {
      this.socket.send(message);
    }
  }

  public closeConnection(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = undefined;
    }
  }

  private handlePing(message: string): void {
    const pingRequest: string[] = message.split(':');

    if (pingRequest.length === 2) {
      this.sendMessage('pong:' + pingRequest[1]);
    }
  }

}
