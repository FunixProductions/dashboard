import {Component} from '@angular/core';
import {UserAuthService} from "../../../services/funixproductions-api/user/services/user-auth-service";
import {UserCreationDTO} from "../../../services/funixproductions-api/user/dtos/requests/user-creation-dto";
import {Router} from "@angular/router";
import {ReCaptchaV3Service} from "ng-recaptcha";
import NotificationsService from "../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  acceptCgu: boolean = false;
  acceptCgv: boolean = false;

  constructor(private userAuthService: UserAuthService,
              private reCaptchaService: ReCaptchaV3Service,
              private router: Router,
              private notificationService: NotificationsService) {
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
