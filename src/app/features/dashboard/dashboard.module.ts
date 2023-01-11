import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopbarModule} from "./components/topbar/topbar.module";
import {SidebarModule} from "./components/sidebar/sidebar.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopbarModule,
    SidebarModule
  ]
})
export class DashboardModule { }
