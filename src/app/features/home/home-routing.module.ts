import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CaptureAuthComponent} from "./capture-auth/capture-auth.component";

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'captureAuth', component: CaptureAuthComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
