import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopbarComponent} from "./topbar.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {AlertContainerComponent} from "./alerts/alert-container/alert-container.component";
import {UserComponent} from "./user/user.component";

@NgModule({
  declarations: [
    TopbarComponent,
    AlertsComponent,
    AlertContainerComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
