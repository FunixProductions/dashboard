import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserAuthService} from "../../../services/funixproductions-api/user/services/user-auth-service";
import UserPasswordResetDTO from "../../../services/funixproductions-api/user/dtos/requests/user-password-reset-dto";
import NotificationsService from "../../../services/core/services/NotificationsService";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  passwordReset: UserPasswordResetDTO = new UserPasswordResetDTO();

  emailReset: string = "";

  constructor(activeRoute: ActivatedRoute,
              private userAuthService: UserAuthService,
              private captchaService: ReCaptchaV3Service,
              private notificationService: NotificationsService) {
    activeRoute.queryParams.subscribe(params => {
      this.passwordReset.resetToken = params['token'];
    });
  }

  sendResetPasswordRequest() {
    if (this.emailReset.length > 0) {
      this.captchaService.execute("resetPasswordRequest").subscribe({
        next: captchaCode => {
          this.userAuthService.resetPasswordRequest(this.emailReset, captchaCode).subscribe({
            next: () => {
              this.notificationService.success("Un email vous a été envoyé pour réinitialiser votre mot de passe.");
            },
            error: (error: HttpErrorResponse) => {
              this.notificationService.onErrorRequest(error);
            }
          })
        },
      })
    } else {
      this.notificationService.warning("Veuillez entrer votre adresse email.");
    }
  }

}
