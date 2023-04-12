import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CategoryCreationModalComponent } from './categories/category-creation-modal/category-creation-modal.component';
import { CategoryEditModalComponent } from './categories/category-edit-modal/category-edit-modal.component';
import { CategoryRemoveModalComponent } from './categories/category-remove-modal/category-remove-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ShopComponent,
    ArticlesComponent,
    CategoriesComponent,
    CategoryCreationModalComponent,
    CategoryEditModalComponent,
    CategoryRemoveModalComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule
  ]
})
export class ShopModule { }
