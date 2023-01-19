import { Component } from '@angular/core';
import {UserAuthService} from "../../../services/funix-api/user/user-auth-service";
import {UserCreationDTO} from "../../../dto/funix-api/user/requests/user-creation-dto";
import {UserDTO} from "../../../dto/funix-api/user/user-dto";
import {Router} from "@angular/router";
import {ReCaptchaV3Service} from "ng-recaptcha";

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
              private router: Router) {
  }

  register(): void {
    const userCreationRequest: UserCreationDTO = new UserCreationDTO();
    userCreationRequest.email = this.email;
    userCreationRequest.username = this.username;
    userCreationRequest.password = this.password;
    userCreationRequest.passwordConfirmation = this.passwordConfirmation;
    userCreationRequest.acceptCGU = this.acceptCgu;
    userCreationRequest.acceptCGV = this.acceptCgv;

    this.reCaptchaService.execute('login').subscribe((token: string) => {
      userCreationRequest.googleCaptcha = token;

      this.userAuthService.register(userCreationRequest).subscribe({
          next: (userDto : UserDTO) => {
            this.router.navigate(['login']);
          },
          error: err => {
            //TODO popup error
          }
        }
      )
    });
  }

}
