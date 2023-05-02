import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TicketsRoutingModule} from "./tickets-routing.module";
import {TicketsComponent} from './tickets.component';
import {TicketCreationComponent} from './ticket-creation/ticket-creation.component';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {TicketMessagingComponent} from './ticket-messaging/ticket-messaging.component';
import {EditorComponent} from "@tinymce/tinymce-angular";
import {FormsModule} from "@angular/forms";
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from "ng-recaptcha";
import {environment} from "../../../../../environments/environment";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {TicketListStaffComponent} from './ticket-list-staff/ticket-list-staff.component';
import {TicketsDoneListComponent} from './ticket-list/tickets-done-list/tickets-done-list.component';
import {
  TicketsInProgressListComponent
} from './ticket-list/tickets-in-progress-list/tickets-in-progress-list.component';
import {TicketsStaffPendingComponent} from './ticket-list-staff/tickets-staff-pending/tickets-staff-pending.component';
import {TicketsStaffDoneComponent} from './ticket-list-staff/tickets-staff-done/tickets-staff-done.component';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketCreationComponent,
    TicketListComponent,
    TicketMessagingComponent,
    TicketListStaffComponent,
    TicketsDoneListComponent,
    TicketsInProgressListComponent,
    TicketsStaffPendingComponent,
    TicketsStaffDoneComponent,
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    EditorComponent,
    FormsModule,
    RecaptchaV3Module,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.reCaptchaSiteKey
    }
  ]

})
export class TicketsModule { }