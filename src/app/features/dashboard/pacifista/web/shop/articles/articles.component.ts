import {Component} from '@angular/core';
import PacifistaShopCategoryDTO
  from "../../../../../../services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import {MatDialog} from "@angular/material/dialog";
import PacifistaShopArticleDTO
  from "../../../../../../services/pacifista-api/web/shop/articles/dtos/PacifistaShopArticleDTO";
import PacifistaShopArticleService
  from "../../../../../../services/pacifista-api/web/shop/articles/services/PacifistaShopArticleService";
import {ArticleRemoveModalComponent} from "./article-remove-modal/article-remove-modal.component";
import {ListComponent} from "../../../../../../services/core/components/lists/ListComponent";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent extends ListComponent<PacifistaShopArticleDTO, PacifistaShopArticleService> {

  columnsToDisplay = ['categoryName', 'name', 'description', 'price', 'createdAt', 'updatedAt', 'actions']

  constructor(private articleService: PacifistaShopArticleService, private dialog: MatDialog) {
    super(articleService);
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
