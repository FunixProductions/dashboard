import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserCreationDTO} from "../dtos/requests/user-creation-dto";
import {UserDTO} from "../dtos/user-dto";
import {environment} from "../../../../../environments/environment";
import {UserLoginDTO} from "../dtos/requests/user-login-dto";
import {UserTokenDTO} from "../dtos/user-token-dto";
import {FunixprodHttpClient} from "../../../core/components/requests/funixprod-http-client";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService extends FunixprodHttpClient {

  url: string = environment.funixproductionsApiUrl + 'user/auth/';

  constructor(protected httpClient: HttpClient) {
    super();
  }

  register(request: UserCreationDTO, captchaCode: string): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(this.url + 'register', request, {headers: super.getHeaders(captchaCode)});
  }

  login(request: UserLoginDTO, captchaCode: string): Observable<UserTokenDTO> {
    return this.httpClient.post<UserTokenDTO>(this.url + 'login', request, {headers: super.getHeaders(captchaCode)});
  }

  logout(): Observable<void> {
    return this.httpClient.post<void>(this.url + 'logout', null, {headers: super.getHeaders()});
  }

  currentUser(): Observable<UserDTO> {
    return this.httpClient.get<UserDTO>(this.url + 'current', {headers: super.getHeaders()});
  }

}
