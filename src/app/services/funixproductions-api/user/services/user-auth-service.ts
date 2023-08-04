import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserCreationDTO} from "../dtos/requests/user-creation-dto";
import {UserDTO} from "../dtos/user-dto";
import {environment} from "../../../../../environments/environment";
import {UserLoginDTO} from "../dtos/requests/user-login-dto";
import {UserTokenDTO} from "../dtos/user-token-dto";
import {FunixprodHttpClient} from "../../../core/components/requests/funixprod-http-client";
import UserPasswordResetRequestDTO from "../dtos/requests/user-password-reset-request-dto";
import UserPasswordResetDTO from "../dtos/requests/user-password-reset-dto";
import {Paginated} from "../../../core/dtos/paginated";

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

  getSessions(page: string = '0', elemsPerPage: string = '30'): Observable<Paginated<UserTokenDTO>> {
    const params: HttpParams = new HttpParams().set('page', page).set('elementsPerPage', elemsPerPage);
    return this.httpClient.get<Paginated<UserTokenDTO>>(this.url + 'sessions', {headers: super.getHeaders(), params: params});
  }

  deleteSessions(ids: string | string[]): Observable<void> {
    let params: HttpParams;
    if (Array.isArray(ids)) {
      params = new HttpParams().set('id', ids.join(','));
    } else {
      params = new HttpParams().set('id', ids as string);
    }

    return this.httpClient.delete<void>(this.url + 'sessions', {headers: super.getHeaders(), params: params});
  }

  resetPasswordRequest(email: string, captchaCode: string): Observable<void> {
    const request = new UserPasswordResetRequestDTO();
    request.email = email;

    return this.httpClient.post<void>(this.url + 'resetPasswordRequest', request, {headers: super.getHeaders(captchaCode)});
  }

  resetPassword(request: UserPasswordResetDTO, captchaCode: string): Observable<void> {
    return this.httpClient.post<void>(this.url + 'resetPassword', request, {headers: super.getHeaders(captchaCode)});
  }

  requestValidationCode(): Observable<void> {
    return this.httpClient.post<void>(this.url + 'valid-account', null, {headers: super.getHeaders()});
  }

}
