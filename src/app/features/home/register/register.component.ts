import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ReCaptchaV3Service} from "ng-recaptcha";
import NotificationsService from "../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {UserAuthService, UserCreationDTO} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private readonly userAuthService: UserAuthService;

  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  acceptCgu: boolean = false;
  acceptCgv: boolean = false;

  constructor(httpClient: HttpClient,
              private reCaptchaService: ReCaptchaV3Service,
              private router: Router,
              private notificationService: NotificationsService) {
    this.userAuthService = new UserAuthService(httpClient, environment.production);
  }

  register(): void {
    const userCreationRequest: UserCreationDTO = new UserCreationDTO();
    userCreationRequest.email = this.email;
    userCreationRequest.username = this.username;
    userCreationRequest.password = this.password;
    userCreationRequest.passwordConfirmation = this.passwordConfirmation;
    userCreationRequest.acceptCGU = this.acceptCgu;
    userCreationRequest.acceptCGV = this.acceptCgv;

    this.reCaptchaService.execute('register').subscribe((token: string) => {
      this.userAuthService.register(userCreationRequest, token).subscribe({
          next: () => {
            this.router.navigate(['login']);
          },
          error: err => {
            this.notificationService.onErrorRequest(err);
          }
        }
      )
    });
  }

}
