import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from "./profile.component";
import {SessionsComponent} from './sessions/sessions.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ProfileRoutingModule} from "./profile-routing.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {SessionRemoveModalComponent} from './sessions/session-remove-modal/session-remove-modal.component';

@NgModule({
  declarations: [
    ProfileComponent,
    SessionsComponent,
    SessionRemoveModalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ProfileRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
  ],
  exports: [
    SessionsComponent
  ]
})
export class ProfileModule { }
