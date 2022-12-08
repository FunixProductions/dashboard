import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from "./components/sidebar/sidebar.module";
import {TopbarModule} from "./components/topbar/topbar.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TopbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
