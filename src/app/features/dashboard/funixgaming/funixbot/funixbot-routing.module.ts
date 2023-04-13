import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FunixbotComponent} from './funixbot.component';
import {FunixbotCommandsComponent} from "./funixbot-commands/funixbot-commands.component";
import {FunixbotUserExpComponent} from "./funixbot-user-exp/funixbot-user-exp.component";

const routes: Routes = [
  { path: '', component: FunixbotComponent, children: [
      {
        path: 'commands',
        component: FunixbotCommandsComponent
      },
      {
        path: 'userexp',
        component: FunixbotUserExpComponent
      },

      {
        path: '',
        redirectTo: 'commands',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'commands'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunixbotRoutingModule { }
