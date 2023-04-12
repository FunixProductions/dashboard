import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import PacifistaShopArticleService
  from "../../../../../../services/pacifista-api/web/shop/articles/services/PacifistaShopArticleService";
import PacifistaShopArticleDTO
  from "../../../../../../services/pacifista-api/web/shop/articles/dtos/PacifistaShopArticleDTO";

@Component({
  selector: 'app-article-edit-modal',
  templateUrl: './article-edit-modal.component.html',
  styleUrls: ['./article-edit-modal.component.css']
})
export class ArticleEditModalComponent {

  article: PacifistaShopArticleDTO = new PacifistaShopArticleDTO();

  constructor(public dialogRef: MatDialogRef<ArticleEditModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private articleService: PacifistaShopArticleService) {
    this.article = data.article;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.articleService.patch(this.article).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    })
  }

}
