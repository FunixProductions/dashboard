import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeRoutingModule} from './home-routing.module';
import {FormsModule} from "@angular/forms";
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from "ng-recaptcha";
import {environment} from "../../../environments/environment";
import {CaptureAuthComponent} from "./capture-auth/capture-auth.component";
import {ResetPasswordComponent} from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CaptureAuthComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RecaptchaV3Module
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.reCaptchaSiteKey
    }
  ]
})
export class HomeModule { }
