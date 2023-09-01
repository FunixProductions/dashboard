import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewsRemoveModalComponent} from "./news-remove-modal/news-remove-modal.component";
import {ListComponent, PacifistaNewsDTO, PacifistaNewsService} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends ListComponent<PacifistaNewsDTO, PacifistaNewsService> {

  columnsToDisplay = ['name', 'title', 'originalWriter', 'updateWriter', 'createdAt', 'updatedAt', 'actions'];


  constructor(httpClient: HttpClient,
              private dialog: MatDialog) {
    super(new PacifistaNewsService(httpClient, environment.production));
  }

  openRemoveDialog(news: PacifistaNewsDTO): void {
    const dialogRef = this.dialog.open(NewsRemoveModalComponent, {
      data: {
        news: news
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

}
