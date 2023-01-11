import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserCreationDTO} from "../../../dto/funix-api/user/requests/user-creation-dto";
import {UserDTO} from "../../../dto/funix-api/user/user-dto";
import {environment} from "../../../../environments/environment";
import {UserLoginDTO} from "../../../dto/funix-api/user/requests/user-login-dto";
import {UserTokenDTO} from "../../../dto/funix-api/user/user-token-dto";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  url: string = environment.funixApiUrl + 'user/auth/';

  constructor(protected httpClient: HttpClient) {
  }

  register(request: UserCreationDTO, googleCaptchaCode: string): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(this.url, request, {headers: this.buildHeader(googleCaptchaCode)});
  }

  login(request: UserLoginDTO, googleCaptchaCode: string): Observable<UserTokenDTO> {
    return this.httpClient.post<UserTokenDTO>(this.url, request, {headers: this.buildHeader(googleCaptchaCode)});
  }

  currentUser(): Observable<UserDTO> {
    let headers: HttpHeaders = this.buildHeader('');
    const bearerToken: string | null = localStorage.getItem('user-token-requests');

    if (bearerToken !== null) {
      headers = headers.append('Authorization', 'Bearer ' + bearerToken);
    }

    return this.httpClient.get<UserDTO>(this.url + 'current', {headers: headers});
  }

  private buildHeader(googleCaptchaCode: string) : HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (googleCaptchaCode !== null && googleCaptchaCode.length > 0) {
      headers = headers.append('google_reCaptcha', googleCaptchaCode);
    }
    return headers;
  }

}
