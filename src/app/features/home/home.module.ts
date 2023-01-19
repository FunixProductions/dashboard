import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRoutingModule } from './home-routing.module';
import {FormsModule} from "@angular/forms";
import {
  RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module
} from "ng-recaptcha";
import {environment} from "../../../environments/environment";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
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
