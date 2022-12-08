import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarPacifistaComponent } from './components/sidebar/sidebar-pacifista/sidebar-pacifista.component';
import { SidebarFunixprodComponent } from './components/sidebar/sidebar-funixprod/sidebar-funixprod.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AlertsComponent } from './components/topbar/alerts/alerts.component';
import { AlertContainerComponent } from './components/topbar/alerts/alert-container/alert-container.component';
import { UserComponent } from './components/topbar/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarPacifistaComponent,
    SidebarFunixprodComponent,
    TopbarComponent,
    AlertsComponent,
    AlertContainerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
