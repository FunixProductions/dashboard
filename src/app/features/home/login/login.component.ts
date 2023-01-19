import { Component } from '@angular/core';
import {UserLoginDTO} from "../../../dto/funix-api/user/requests/user-login-dto";
import {UserAuthService} from "../../../services/funix-api/user/user-auth-service";
import {Router} from "@angular/router";
import {UserTokenDTO} from "../../../dto/funix-api/user/user-token-dto";
import {ReCaptchaV3Service} from "ng-recaptcha";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  stayLogin: boolean = false;

  constructor(private userAuthService: UserAuthService,
              private reCaptchaService: ReCaptchaV3Service,
              private router: Router) {
  }

  login(): void {
    const loginRequest: UserLoginDTO = new UserLoginDTO();
    loginRequest.username = this.username;
    loginRequest.password = this.password;
    loginRequest.stayConnected = this.stayLogin;

    this.reCaptchaService.execute('login').subscribe((token: string) => {
      this.userAuthService.login(loginRequest, token).subscribe({
        next: (loginDto: UserTokenDTO) => {
          if (loginDto.token) {
            localStorage.setItem('user-token-requests', loginDto.token);
            this.router.navigate(['dashboard'])
          } else {
            //TODO popup error
          }
        },
        error: err => {
          //TODO popup error
        }
      });
    });
  }

}
