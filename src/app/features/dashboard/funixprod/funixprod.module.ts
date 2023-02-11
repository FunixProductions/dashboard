import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunixprodRoutingModule } from './funixprod-routing.module';
import { UsersComponent } from './users/users.component';
import {FunixprodComponent} from "./funixprod.component";
import {MatTableModule} from "@angular/material/table";
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserRemoveModalComponent } from './users/user-remove-modal/user-remove-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FunixbotCommandsComponent } from './funixbot/funixbot-commands/funixbot-commands.component';
import { FunixbotUserExpComponent } from './funixbot/funixbot-user-exp/funixbot-user-exp.component';
import { FunixbotCommandsEditComponent } from './funixbot/funixbot-commands/funixbot-commands-edit/funixbot-commands-edit.component';
import { FunixbotUserExpEditComponent } from './funixbot/funixbot-user-exp/funixbot-user-exp-edit/funixbot-user-exp-edit.component';
import { FunixbotCommandsRemoveModalComponent } from './funixbot/funixbot-commands/funixbot-commands-remove-modal/funixbot-commands-remove-modal.component';
import { FunixbotUserExpRemoveModalComponent } from './funixbot/funixbot-user-exp/funixbot-user-exp-remove-modal/funixbot-user-exp-remove-modal.component';
import { FunixbotCommandCreateModalComponent } from './funixbot/funixbot-commands/funixbot-command-create-modal/funixbot-command-create-modal.component';
import { TwitchEventsubComponent } from './twitch/twitch-eventsub/twitch-eventsub.component';
import { TwitchEventsubModalComponent } from './twitch/twitch-eventsub-modal/twitch-eventsub-modal.component';


@NgModule({
  declarations: [
    FunixprodComponent,
    UsersComponent,
    UserEditComponent,
    UserRemoveModalComponent,
    FunixbotCommandsComponent,
    FunixbotUserExpComponent,
    FunixbotCommandsEditComponent,
    FunixbotUserExpEditComponent,
    FunixbotCommandsRemoveModalComponent,
    FunixbotUserExpRemoveModalComponent,
    FunixbotCommandCreateModalComponent,
    TwitchEventsubComponent,
    TwitchEventsubModalComponent
  ],
    imports: [
        CommonModule,
        FunixprodRoutingModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatPaginatorModule,
    ]
})
export class FunixprodModule { }
