import {Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FunixprodHttpClient} from "../../../funixprod-http-client";
import {Observable} from "rxjs";
import {TwitchEventSubListDTO} from "../../../../dto/funix-api/external_api/twitch/eventsub/TwitchEventSubListDTO";

@Injectable({
  providedIn: 'root'
})
export class TwitchEventsubService extends FunixprodHttpClient {

  url: string = environment.funixApiUrl + 'twitch/eventsub'

  constructor(protected httpClient: HttpClient) {
    super();
  }

  getAppSubscriptions(): Observable<TwitchEventSubListDTO> {
    return this.httpClient.get<TwitchEventSubListDTO>(this.url, {headers: this.headers});
  }

  createSubscription(streamerUsername: string = 'funixgaming'): Observable<any> {
    return this.httpClient.post<any>(this.url, streamerUsername, {headers: this.headers});
  }

  deleteSubscription(streamerUsername: string = 'funixgaming'): Observable<any> {
    const httpParams: HttpParams = new HttpParams().set('streamer_username', streamerUsername);

    return this.httpClient.delete(this.url, {
      params: httpParams,
      headers: this.headers
    })
  }
}
