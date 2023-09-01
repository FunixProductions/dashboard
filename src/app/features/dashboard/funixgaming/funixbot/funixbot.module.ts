import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FunixbotRoutingModule} from './funixbot-routing.module';
import {FunixbotComponent} from './funixbot.component';
import {FunixbotCommandsComponent} from "./funixbot-commands/funixbot-commands.component";
import {
  FunixbotCommandsEditComponent
} from "./funixbot-commands/funixbot-commands-edit/funixbot-commands-edit.component";
import {
  FunixbotCommandsRemoveModalComponent
} from "./funixbot-commands/funixbot-commands-remove-modal/funixbot-commands-remove-modal.component";
import {
  FunixbotCommandCreateModalComponent
} from "./funixbot-commands/funixbot-command-create-modal/funixbot-command-create-modal.component";
import {FunixbotUserExpComponent} from "./funixbot-user-exp/funixbot-user-exp.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {FunixbotAutomessagesComponent} from './funixbot-automessages/funixbot-automessages.component';
import {
  FunixbotAutomessageHandleModalComponent
} from './funixbot-automessages/funixbot-automessage-handle-modal/funixbot-automessage-handle-modal.component';
import {
  FunixbotAutomessageRemoveModalComponent
} from './funixbot-automessages/funixbot-automessage-remove-modal/funixbot-automessage-remove-modal.component';


@NgModule({
  declarations: [
    FunixbotComponent,
    FunixbotCommandsComponent,
    FunixbotCommandsEditComponent,
    FunixbotCommandsRemoveModalComponent,
    FunixbotCommandCreateModalComponent,
    FunixbotUserExpComponent,
    FunixbotAutomessagesComponent,
    FunixbotAutomessageHandleModalComponent,
    FunixbotAutomessageRemoveModalComponent
  ],
  imports: [
    CommonModule,
    FunixbotRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule
  ]
})
export class FunixbotModule { }
