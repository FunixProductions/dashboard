import {Component} from '@angular/core';
import {UserLoginDTO} from "../../../services/funix-api/user/dtos/requests/user-login-dto";
import {UserAuthService} from "../../../services/funix-api/user/services/user-auth-service";
import {Router} from "@angular/router";
import {UserTokenDTO} from "../../../services/funix-api/user/dtos/user-token-dto";
import {ReCaptchaV3Service} from "ng-recaptcha";
import NotificationsService from "../../../services/core/services/NotificationsService";

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
              private router: Router,
              private notificationService: NotificationsService) {
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

            const date = new Date();
            while (localStorage.getItem('user-token-requests') === null) {
              const now = new Date();
              if (now.getTime() - date.getTime() > 3000) {
                break;
              }
            }

            this.router.navigate(['dashboard']);
          } else {
            this.notificationService.error('Veuillez vous reconnecter, une erreur est survenue.');
          }
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    });
  }

}
