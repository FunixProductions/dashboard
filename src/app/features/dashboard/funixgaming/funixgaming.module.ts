import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FunixgamingRoutingModule} from './funixgaming-routing.module';
import {FunixgamingComponent} from './funixgaming.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FunixgamingComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    FunixgamingRoutingModule
  ]
})
export class FunixgamingModule { }
