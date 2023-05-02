import {Component} from '@angular/core';
import PacifistaNewsDTO from "../../../../../services/pacifista-api/web/news/dtos/PacifistaNewsDTO";
import PacifistaNewsService from "../../../../../services/pacifista-api/web/news/services/PacifistaNewsService";
import {MatDialog} from "@angular/material/dialog";
import {NewsRemoveModalComponent} from "./news-remove-modal/news-remove-modal.component";
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends ListComponent<PacifistaNewsDTO, PacifistaNewsService> {

  columnsToDisplay = ['name', 'title', 'originalWriter', 'updateWriter', 'createdAt', 'updatedAt', 'actions'];


  constructor(private newsServices: PacifistaNewsService,
              private dialog: MatDialog) {
    super(newsServices);
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
