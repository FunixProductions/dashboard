import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {IncomeAccountingComponent} from "./income-accounting/income-accounting.component";
import {ProductsAccountingComponent} from "./products-accounting/products-accounting.component";

const routes: Routes = [
  { path: '', children: [
      { path: 'incomes', component: IncomeAccountingComponent},
      { path: 'products', component: ProductsAccountingComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountingRoutingModule { }
