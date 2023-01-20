import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunixprodRoutingModule } from './funixprod-routing.module';
import { UsersComponent } from './users/users.component';
import {FunixprodComponent} from "./funixprod.component";
import {MatTableModule} from "@angular/material/table";
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserRemoveModalComponent } from './users/user-remove-modal/user-remove-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FunixprodComponent,
    UsersComponent,
    UserEditComponent,
    UserRemoveModalComponent
  ],
  imports: [
    CommonModule,
    FunixprodRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
  ]
})
export class FunixprodModule { }
