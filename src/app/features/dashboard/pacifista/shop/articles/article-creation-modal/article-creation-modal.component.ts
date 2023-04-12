import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import PacifistaShopArticleDTO
  from "../../../../../../services/pacifista-api/web/shop/articles/dtos/PacifistaShopArticleDTO";
import PacifistaShopArticleService
  from "../../../../../../services/pacifista-api/web/shop/articles/services/PacifistaShopArticleService";

@Component({
  selector: 'app-article-creation-modal',
  templateUrl: './article-creation-modal.component.html',
  styleUrls: ['./article-creation-modal.component.css']
})
export class ArticleCreationModalComponent {

  article: PacifistaShopArticleDTO = new PacifistaShopArticleDTO();

  constructor(public dialogRef: MatDialogRef<ArticleCreationModalComponent>,
              private articleService: PacifistaShopArticleService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.articleService.create(this.article).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    });
  }

}
