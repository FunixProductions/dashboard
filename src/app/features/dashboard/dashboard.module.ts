import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {TopbarModule} from "./components/topbar/topbar.module";
import {SidebarModule} from "./components/sidebar/sidebar.module";
import {HomeDashboardComponent} from './home/home-dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    DashboardComponent,
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    TopbarModule,
    SidebarModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ]

})
export class DashboardModule { }
