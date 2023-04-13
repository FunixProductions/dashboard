import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WebRoutingModule} from './web-routing.module';
import {WebComponent} from './web.component';
import {NewsComponent} from "./news/news.component";
import {NewsEditionComponent} from './news/news-edition/news-edition.component';
import {NewsRemoveModalComponent} from './news/news-remove-modal/news-remove-modal.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {EditorModule} from "@tinymce/tinymce-angular";


@NgModule({
  declarations: [
    WebComponent,
    NewsComponent,
    NewsEditionComponent,
    NewsRemoveModalComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    EditorModule
  ]
})
export class WebModule { }
