import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FunixgamingComponent} from "./funixgaming.component";

const routes: Routes = [
  { path: '', component: FunixgamingComponent, children: [
      { path: 'funixbot', loadChildren: () => import('./funixbot/funixbot.module').then(m => m.FunixbotModule) },

      { path: '', redirectTo: 'funixbot', pathMatch: 'full'},
      { path: '**', redirectTo: 'funixbot' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunixgamingRoutingModule { }
