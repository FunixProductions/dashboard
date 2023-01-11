import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./features/home/home.component";
import { DashboardComponent } from './features/dashboard/dashboard.component';
import {DashboardModule} from "./features/dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
