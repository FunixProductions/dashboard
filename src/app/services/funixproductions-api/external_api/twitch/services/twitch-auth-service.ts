import {Injectable} from "@angular/core";
import {environment} from "../../../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FunixprodHttpClient} from "../../../../core/components/requests/funixprod-http-client";
import {Observable} from "rxjs";
import {TwitchTokenType} from "../enums/TwitchTokenType";
import TwitchClientTokenDTO from "../dtos/TwitchClientTokenDTO";

@Injectable({
  providedIn: 'root'
})
export class TwitchAuthService extends FunixprodHttpClient {

  url: string = environment.funixproductionsApiUrl + 'twitch/auth'

  constructor(protected httpClient: HttpClient) {
    super();
  }

  getAuthClientUrl(tokenType: TwitchTokenType = TwitchTokenType.VIEWER): Observable<string> {
    const httpParams: HttpParams = new HttpParams().set('tokenType', tokenType);

    return this.httpClient.get(this.url + '/clientAuthUrl', {
      headers: super.getHeaders(),
      params: httpParams,
      responseType: "text"
    });
  }

  getTwitchAccessTokenSession(): Observable<TwitchClientTokenDTO> {
    return this.httpClient.get<TwitchClientTokenDTO>(this.url + '/accessToken', {headers: super.getHeaders()});
  }
}
