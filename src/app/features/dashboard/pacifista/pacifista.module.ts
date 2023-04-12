import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacifistaRoutingModule } from './pacifista-routing.module';
import { PacifistaComponent } from './pacifista.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    PacifistaComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    PacifistaRoutingModule
  ]
})
export class PacifistaModule { }
