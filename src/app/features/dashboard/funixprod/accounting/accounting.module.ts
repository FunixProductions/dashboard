import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountingComponent} from "./accounting.component";
import {AccountingRoutingModule} from "./accounting-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AccountingDeleteModalComponent} from "./accounting-delete-modal/accounting-delete-modal.component";

@NgModule({
  declarations: [
    AccountingComponent,
    AccountingDeleteModalComponent,
    AccountingDeleteModalComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
  ]
})
export class AccountingModule { }
