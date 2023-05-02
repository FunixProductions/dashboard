import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TicketsComponent} from "./tickets.component";
import {TicketListComponent} from "./ticket-list/ticket-list.component";
import {TicketCreationComponent} from "./ticket-creation/ticket-creation.component";
import {TicketMessagingComponent} from "./ticket-messaging/ticket-messaging.component";
import {TicketListStaffComponent} from "./ticket-list-staff/ticket-list-staff.component";

const routes: Routes = [
  { path: '', component: TicketsComponent, children: [
      {
        path: 'list-staff',
        component: TicketListStaffComponent
      },
      {
        path: 'list',
        component: TicketListComponent
      },
      {
        path: 'create',
        component: TicketCreationComponent
      },
      {
        path: 'messages/:ticket-id',
        component: TicketMessagingComponent
      },

      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
