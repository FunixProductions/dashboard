import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import PacifistaShopArticleDTO
  from "../../../../../../../services/pacifista-api/web/shop/articles/dtos/PacifistaShopArticleDTO";
import PacifistaShopArticleService
  from "../../../../../../../services/pacifista-api/web/shop/articles/services/PacifistaShopArticleService";

@Component({
  selector: 'app-article-remove-modal',
  templateUrl: './article-remove-modal.component.html',
  styleUrls: ['./article-remove-modal.component.css']
})
export class ArticleRemoveModalComponent {

  article: PacifistaShopArticleDTO = new PacifistaShopArticleDTO();

  constructor(public dialogRef: MatDialogRef<ArticleRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private articleService: PacifistaShopArticleService) {
    this.article = data.article;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.article.id) {
      this.articleService.delete(this.article.id).subscribe({
        next: () => {
          this.dialogRef.close();
        }
      });
    }
  }

}
