import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ArticleRemoveModalComponent} from "./article-remove-modal/article-remove-modal.component";
import {ListComponent} from "@funixproductions/funixproductions-requests";
import PacifistaShopArticleDTO
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/shop/articles/dtos/PacifistaShopArticleDTO";
import PacifistaShopArticleService
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/shop/articles/services/PacifistaShopArticleService";
import PacifistaShopCategoryDTO
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent extends ListComponent<PacifistaShopArticleDTO, PacifistaShopArticleService> {

  columnsToDisplay = ['categoryName', 'name', 'description', 'price', 'createdAt', 'updatedAt', 'actions']

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
