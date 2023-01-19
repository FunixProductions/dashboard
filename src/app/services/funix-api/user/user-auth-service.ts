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

  register(request: UserCreationDTO): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(this.url + 'register', request, {headers: this.buildHeader()});
  }

  login(request: UserLoginDTO): Observable<UserTokenDTO> {
    return this.httpClient.post<UserTokenDTO>(this.url + 'login', request, {headers: this.buildHeader()});
  }

  currentUser(): Observable<UserDTO> {
    let headers: HttpHeaders = this.buildHeader();
    const bearerToken: string | null = localStorage.getItem('user-token-requests');

    if (bearerToken !== null) {
      headers = headers.append('Authorization', 'Bearer ' + bearerToken);
    }

    return this.httpClient.get<UserDTO>(this.url + 'current', {headers: headers});
  }

  private buildHeader() : HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

}
