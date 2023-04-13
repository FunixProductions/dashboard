import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import PacifistaNewsDTO from "../../../../../../services/pacifista-api/web/news/dtos/PacifistaNewsDTO";
import PacifistaNewsService from "../../../../../../services/pacifista-api/web/news/services/PacifistaNewsService";

@Component({
  selector: 'app-news-remove-modal',
  templateUrl: './news-remove-modal.component.html',
  styleUrls: ['./news-remove-modal.component.css']
})
export class NewsRemoveModalComponent {
  news: PacifistaNewsDTO = new PacifistaNewsDTO();

  constructor(public dialogRef: MatDialogRef<NewsRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private newsService: PacifistaNewsService) {
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
        }
      });
    }
  }
}
