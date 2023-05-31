import {Component, OnInit} from '@angular/core';
import {UserLoginDTO} from "../../../services/funixproductions-api/user/dtos/requests/user-login-dto";
import {UserAuthService} from "../../../services/funixproductions-api/user/services/user-auth-service";
import {Router} from "@angular/router";
import {UserTokenDTO} from "../../../services/funixproductions-api/user/dtos/user-token-dto";
import {ReCaptchaV3Service} from "ng-recaptcha";
import NotificationsService from "../../../services/core/services/NotificationsService";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  stayLogin: boolean = false;

  googleAuthRedirectUri: string = environment.funixproductionsApiUrl + 'google/auth/verifyGoogleIdToken?origin=funixproductions-dashboard';

  constructor(private userAuthService: UserAuthService,
              private reCaptchaService: ReCaptchaV3Service,
              private router: Router,
              private notificationService: NotificationsService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      //@ts-ignore
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        login_uri: this.googleAuthRedirectUri,
        context: 'signin',
        ux_mode: 'redirect',
        auto_prompt: false,
      });

      //@ts-ignore
      google.accounts.id.renderButton(
        document.getElementById('googleButtonDiv'),
        {
          type: 'standard',
          shape: 'rectangular',
          theme: 'outline',
          text: 'signin_with',
          size: 'large',
          locale: 'fr',
          logo_alignment: 'left'
        }
      );
    }
  }

  login(): void {
    const loginRequest: UserLoginDTO = new UserLoginDTO();
    loginRequest.username = this.username;
    loginRequest.password = this.password;
    loginRequest.stayConnected = this.stayLogin;

    this.reCaptchaService.execute('login').subscribe((token: string) => {
      this.userAuthService.login(loginRequest, token).subscribe({
        next: async (loginDto: UserTokenDTO) => {
          if (loginDto.token) {
            await localStorage.setItem('user-token-requests', loginDto.token);
            await this.router.navigate(['dashboard']);
          } else {
            this.notificationService.error('Erreur de connection. Veuillez recommencer.')
          }
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    });
  }

}
