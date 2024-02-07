import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountingRoutingModule} from "./accounting-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {IncomeAccountingComponent} from "./income-accounting/income-accounting.component";
import {ProductsAccountingComponent} from "./products-accounting/products-accounting.component";
import {
  IncomeAccountingDataModalComponent
} from "./income-accounting/income-accounting-data-modal/income-accounting-data-modal.component";
import {
  IncomeAccountingDeleteModalComponent
} from "./income-accounting/income-accounting-delete-modal/income-accounting-delete-modal.component";
import {
  ProductsAccountingDataModalComponent
} from "./products-accounting/products-accounting-data-modal/products-accounting-data-modal.component";

@NgModule({
  declarations: [
    IncomeAccountingComponent,
    ProductsAccountingComponent,
    IncomeAccountingDataModalComponent,
    IncomeAccountingDeleteModalComponent,
    ProductsAccountingDataModalComponent
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
