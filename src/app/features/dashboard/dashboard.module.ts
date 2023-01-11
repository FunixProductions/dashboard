import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {TopbarComponent} from "./components/topbar/topbar.component";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
  ]

})
export class DashboardModule { }
