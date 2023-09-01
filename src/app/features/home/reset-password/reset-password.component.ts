import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import UserPasswordResetDTO
    from "@funixproductions/funixproductions-requests/lib/services/funixproductions-api/user/dtos/requests/user-password-reset-dto";
import {UserAuthService} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../environments/environment";
import NotificationsService from "../../../services/NotificationService";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  private readonly userAuthService: UserAuthService;
  passwordReset: UserPasswordResetDTO = new UserPasswordResetDTO();

  emailReset: string = "";

  constructor(activeRoute: ActivatedRoute,
              httpClient: HttpClient,
              private router: Router,
              private notificationService: NotificationsService,
              private captchaService: ReCaptchaV3Service) {
    this.userAuthService = new UserAuthService(httpClient, environment.production);

    activeRoute.queryParams.subscribe(params => {
      this.passwordReset.resetToken = params['token'];
    });
  }

  resetPassword(): void {
    if (this.passwordReset.newPassword && this.passwordReset.newPasswordConfirmation && this.passwordReset.newPassword.length > 0 && this.passwordReset.newPasswordConfirmation.length > 0) {
      this.captchaService.execute("resetPassword").subscribe({
        next: captchaCode => {
          this.userAuthService.resetPassword(this.passwordReset, captchaCode).subscribe({
            next: () => {
              this.notificationService.success("Votre mot de passe a été réinitialisé.");
              this.router.navigate(['/login']);
            },
            error: (error: HttpErrorResponse) => {
              this.notificationService.onErrorRequest(error);
            }
          })
        }
      })
    } else {
      this.notificationService.warning("Veuillez entrer votre mot de passe.");
    }
  }

  sendResetPasswordRequest(): void {
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
