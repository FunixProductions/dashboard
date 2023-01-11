import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'login',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
