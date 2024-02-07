import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ArticleRemoveModalComponent} from "./article-remove-modal/article-remove-modal.component";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {
  ListComponent,
  PacifistaShopArticleDTO,
  PacifistaShopArticleService,
  PacifistaShopCategoryDTO
} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent extends ListComponent<PacifistaShopArticleDTO, PacifistaShopArticleService> {

  columnsToDisplay = ['categoryName', 'name', 'description', 'logo', 'price', 'createdAt', 'updatedAt', 'actions']
  protected readonly pacifistaApiDomain: string = environment.pacifistaApiUrl;

  constructor(httpClient: HttpClient, private dialog: MatDialog) {
    super(new PacifistaShopArticleService(httpClient, environment.production));
  }

  openRemoveDialog(article: PacifistaShopCategoryDTO): void {
    const dialogRef = this.dialog.open(ArticleRemoveModalComponent, {
      data: {
        article: article
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

}
