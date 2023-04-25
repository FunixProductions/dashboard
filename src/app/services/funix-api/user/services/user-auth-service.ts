import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserCreationDTO} from "../dtos/requests/user-creation-dto";
import {UserDTO} from "../dtos/user-dto";
import {environment} from "../../../../../environments/environment";
import {UserLoginDTO} from "../dtos/requests/user-login-dto";
import {UserTokenDTO} from "../dtos/user-token-dto";
import {FunixprodHttpClient} from "../../../funixprod-http-client";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService extends FunixprodHttpClient {

  url: string = environment.funixApiUrl + 'user/auth/';

  private userDtoCache: Observable<UserDTO> | null = null;

  constructor(protected httpClient: HttpClient) {
    super();
  }

  register(request: UserCreationDTO, captchaCode: string): Observable<UserDTO> {
    super.addCaptchaToHeader(captchaCode);

    return this.httpClient.post<UserDTO>(this.url + 'register', request, {headers: super.headers});
  }

  login(request: UserLoginDTO, captchaCode: string): Observable<UserTokenDTO> {
    super.addCaptchaToHeader(captchaCode);

    return this.httpClient.post<UserTokenDTO>(this.url + 'login', request, {headers: super.headers});
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
