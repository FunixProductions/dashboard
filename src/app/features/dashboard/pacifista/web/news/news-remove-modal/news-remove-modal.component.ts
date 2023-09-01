import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import PacifistaNewsDTO
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/news/dtos/PacifistaNewsDTO";
import PacifistaNewsService
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/news/services/PacifistaNewsService";
import NotificationsService from "../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-news-remove-modal',
  templateUrl: './news-remove-modal.component.html',
  styleUrls: ['./news-remove-modal.component.css']
})
export class NewsRemoveModalComponent {
  private readonly newsService: PacifistaNewsService
  news: PacifistaNewsDTO = new PacifistaNewsDTO();

  constructor(public dialogRef: MatDialogRef<NewsRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.newsService = new PacifistaNewsService(httpClient, environment.production);
    this.news = data.news;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.news.id) {
      this.newsService.delete(this.news.id).subscribe({
        next: () => {
          this.dialogRef.close();
          this.notificationService.success('News supprimée.');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    }
  }
}
