import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TicketsRoutingModule} from "./tickets-routing.module";
import {TicketsComponent} from './tickets.component';
import {TicketCreationComponent} from './ticket-creation/ticket-creation.component';
import {TicketListComponent} from './ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketCreationComponent,
    TicketListComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]

})
export class TicketsModule { }
