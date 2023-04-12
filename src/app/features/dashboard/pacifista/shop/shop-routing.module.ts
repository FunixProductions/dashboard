import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
