import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PacifistaComponent} from "./pacifista.component";

const routes: Routes = [
  { path: '', component: PacifistaComponent, children: [
      { path: 'web', loadChildren: () => import('./web/web.module').then(m => m.WebModule) },

      {
        path: '',
        redirectTo: 'web',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'web'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacifistaRoutingModule { }
