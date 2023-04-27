import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {CategoriesComponent} from "./categories/categories.component";
import {ArticleGestionComponent} from "./articles/article-gestion/article-gestion.component";
import {ShopComponent} from "./shop.component";

const routes: Routes = [
  {path: '', component: ShopComponent, children: [
      { path: 'articles', component: ArticlesComponent },
      { path: 'articles/:id', component: ArticleGestionComponent },
      { path: 'categories', component: CategoriesComponent },
      {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'articles'
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
