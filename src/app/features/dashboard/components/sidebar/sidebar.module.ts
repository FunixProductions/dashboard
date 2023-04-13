import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from "./sidebar.component";
import {SidebarFunixprodComponent} from "./sidebar-funixprod/sidebar-funixprod.component";
import {SidebarPacifistaComponent} from "./sidebar-pacifista/sidebar-pacifista.component";
import {SidebarFunixgamingComponent} from './sidebar-funixgaming/sidebar-funixgaming.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarFunixprodComponent,
    SidebarPacifistaComponent,
    SidebarFunixgamingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]

})
export class SidebarModule { }
