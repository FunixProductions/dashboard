import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebComponent} from './web.component';
import {NewsComponent} from "./news/news.component";
import {NewsEditionComponent} from "./news/news-edition/news-edition.component";

const routes: Routes = [
  { path: '', component: WebComponent, children: [
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsEditionComponent },
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
export class WebRoutingModule { }
