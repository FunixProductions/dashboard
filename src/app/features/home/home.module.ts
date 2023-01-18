import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRoutingModule } from './home-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
