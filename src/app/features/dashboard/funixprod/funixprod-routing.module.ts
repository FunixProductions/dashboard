import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {FunixprodComponent} from "./funixprod.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {FunixbotCommandsComponent} from "./funixbot/funixbot-commands/funixbot-commands.component";
import {
  FunixbotCommandsEditComponent
} from "./funixbot/funixbot-commands/funixbot-commands-edit/funixbot-commands-edit.component";
import {FunixbotUserExpComponent} from "./funixbot/funixbot-user-exp/funixbot-user-exp.component";
import {
  FunixbotUserExpEditComponent
} from "./funixbot/funixbot-user-exp/funixbot-user-exp-edit/funixbot-user-exp-edit.component";

const routes: Routes = [
  { path: '', component: FunixprodComponent, children: [
      { path: 'users', component: UsersComponent},
      { path: 'users/:id', component: UserEditComponent},

      { path: 'funixbot/commands', component: FunixbotCommandsComponent},
      { path: 'funixbot/commands/:id', component: FunixbotCommandsEditComponent},
      { path: 'funixbot/userexp', component: FunixbotUserExpComponent},
      { path: 'funixbot/userexp/:id', component: FunixbotUserExpEditComponent},

      { path: '', redirectTo: 'users', pathMatch: 'full'},
      { path: '**', redirectTo: 'users' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FunixprodRoutingModule { }
