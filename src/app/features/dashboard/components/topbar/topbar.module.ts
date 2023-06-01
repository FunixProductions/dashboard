import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopbarComponent} from "./topbar.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {AlertContainerComponent} from "./alerts/alert-container/alert-container.component";
import {UserComponent} from "./user/user.component";
import {UserLogoutModalComponent} from './user/user-logout-modal/user-logout-modal.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    TopbarComponent,
    AlertsComponent,
    AlertContainerComponent,
    UserComponent,
    UserLogoutModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
