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

  private userDtoCache: Observable<UserDTO> | null = null;

  constructor(protected httpClient: HttpClient) {
    super();
  }

  register(request: UserCreationDTO, captchaCode: string): Observable<UserDTO> {
    this.addCaptchaToHeader(captchaCode);

    return this.httpClient.post<UserDTO>(this.url + 'register', request, {headers: this.headers});
  }

  login(request: UserLoginDTO, captchaCode: string): Observable<UserTokenDTO> {
    this.addCaptchaToHeader(captchaCode);

    return this.httpClient.post<UserTokenDTO>(this.url + 'login', request, {headers: this.headers});
  }

  logout(): Observable<void> {
    return this.httpClient.post<void>(this.url + 'logout', null, {headers: this.headers});
  }

  currentUser(): Observable<UserDTO> {
    if (this.userDtoCache !== null) {
      return this.userDtoCache;
    } else {
      this.userDtoCache = this.httpClient.get<UserDTO>(this.url + 'current', {headers: this.headers});
      return this.userDtoCache;
    }
  }

}
