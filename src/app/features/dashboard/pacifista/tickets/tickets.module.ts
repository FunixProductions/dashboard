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

@NgModule({
  declarations: [
    TicketsComponent,
    TicketCreationComponent,
    TicketListComponent,
    TicketMessagingComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    EditorComponent,
    FormsModule,
    RecaptchaV3Module
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.reCaptchaSiteKey
    }
  ]

})
export class TicketsModule { }
