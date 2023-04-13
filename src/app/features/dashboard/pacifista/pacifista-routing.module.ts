import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from "./news/news.component";
import {PacifistaComponent} from "./pacifista.component";

const routes: Routes = [
  { path: '', component: PacifistaComponent, children: [
      { path: 'news', component: NewsComponent },
      { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },

      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'news'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacifistaRoutingModule { }
