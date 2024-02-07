import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {FunixprodComponent} from "./funixprod.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {TwitchEventsubComponent} from "./twitch/twitch-eventsub/twitch-eventsub.component";

const routes: Routes = [
  { path: '', component: FunixprodComponent, children: [

      { path: 'accounting', loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule)},

      { path: 'users', component: UsersComponent},
      { path: 'users/:id', component: UserEditComponent},

      { path: 'twitch/eventsub', component: TwitchEventsubComponent},

      { path: '', redirectTo: 'users', pathMatch: 'full'},
      { path: '**', redirectTo: 'users' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FunixprodRoutingModule { }
