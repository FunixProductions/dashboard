import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
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

  private readonly captchaHeaderCode: string = 'X-Captcha-Google-Code';

  url: string = environment.funixApiUrl + 'user/auth/';

  private userDtoCache: UserDTO | null = null;

  constructor(protected httpClient: HttpClient) {
    super();
  }

  register(request: UserCreationDTO, captchaCode: string): Observable<UserDTO> {
    let headers = this.headers;
    headers = headers.set(this.captchaHeaderCode, captchaCode);

    return this.httpClient.post<UserDTO>(this.url + 'register', request, {headers: headers});
  }

  login(request: UserLoginDTO, captchaCode: string): Observable<UserTokenDTO> {
    let headers = this.headers;
    headers = headers.set(this.captchaHeaderCode, captchaCode);

    return this.httpClient.post<UserTokenDTO>(this.url + 'login', request, {headers: headers});
  }

  currentUser(): Observable<UserDTO> {
    if (this.userDtoCache !== null) {
      return of(this.userDtoCache);
    }

    return this.httpClient.get<UserDTO>(this.url + 'current', {headers: this.headers}).pipe(
      tap((userDto: UserDTO) => {
        this.userDtoCache = userDto;
      })
    );
  }

}
