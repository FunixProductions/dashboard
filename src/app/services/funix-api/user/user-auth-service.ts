import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserCreationDTO} from "../../../dto/funix-api/user/requests/user-creation-dto";
import {UserDTO} from "../../../dto/funix-api/user/user-dto";
import {environment} from "../../../../environments/environment";
import {UserLoginDTO} from "../../../dto/funix-api/user/requests/user-login-dto";
import {UserTokenDTO} from "../../../dto/funix-api/user/user-token-dto";
import {FunixprodHttpClient} from "../../funixprod-http-client";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService extends FunixprodHttpClient {

  url: string = environment.funixApiUrl + 'user/auth/';

  constructor(protected httpClient: HttpClient) {
    super();
  }

  register(request: UserCreationDTO): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(this.url + 'register', request, {headers: this.headers});
  }

  login(request: UserLoginDTO): Observable<UserTokenDTO> {
    return this.httpClient.post<UserTokenDTO>(this.url + 'login', request, {headers: this.headers});
  }

  currentUser(): Observable<UserDTO> {
    return this.httpClient.get<UserDTO>(this.url + 'current', {headers: this.headers});
  }

}
