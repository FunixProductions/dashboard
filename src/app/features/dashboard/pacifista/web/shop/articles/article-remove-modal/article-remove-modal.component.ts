import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment";
import NotificationsService from "../../../../../../../services/NotificationService";
import {PacifistaShopArticleDTO, PacifistaShopArticleService} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-article-remove-modal',
  templateUrl: './article-remove-modal.component.html',
  styleUrls: ['./article-remove-modal.component.css']
})
export class ArticleRemoveModalComponent {

  private readonly articleService: PacifistaShopArticleService;
  article: PacifistaShopArticleDTO = new PacifistaShopArticleDTO();

  constructor(public dialogRef: MatDialogRef<ArticleRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notificationService: NotificationsService,
              httpClient: HttpClient) {
    this.articleService = new PacifistaShopArticleService(httpClient, environment.production);
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
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    }
  }

}
