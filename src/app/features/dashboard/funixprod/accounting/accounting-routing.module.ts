import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccountingComponent} from "./accounting.component";

const routes: Routes = [
  { path: '', children: [
      { path: '', component: AccountingComponent},
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
