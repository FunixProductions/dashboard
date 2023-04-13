import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PacifistaRoutingModule} from './pacifista-routing.module';
import {PacifistaComponent} from './pacifista.component';

@NgModule({
  declarations: [
    PacifistaComponent,
  ],
  imports: [
    CommonModule,
    PacifistaRoutingModule
  ]
})
export class PacifistaModule { }
