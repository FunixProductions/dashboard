import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HomeDashboardComponent} from "./home/home-dashboard.component";

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      {
        path: 'home',
        component: HomeDashboardComponent
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'funixprod',
        loadChildren: () => import('./funixprod/funixprod.module').then(m => m.FunixprodModule)
      },
      {
        path: 'pacifista',
        loadChildren: () => import('./pacifista/pacifista.module').then(m => m.PacifistaModule)
      },
      {
        path: 'funixgaming',
        loadChildren: () => import('./funixgaming/funixgaming.module').then(m => m.FunixgamingModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
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
export class DashboardRoutingModule { }
