import {Component, OnInit} from '@angular/core';
import {PageOption, Paginated} from "../../../../../services/core/dtos/paginated";
import PacifistaNewsDTO from "../../../../../services/pacifista-api/web/news/dtos/PacifistaNewsDTO";
import {QueryBuilder, QueryParam} from "../../../../../utils/query.builder";
import PacifistaNewsService from "../../../../../services/pacifista-api/web/news/services/PacifistaNewsService";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";
import {NewsRemoveModalComponent} from "./news-remove-modal/news-remove-modal.component";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  columnsToDisplay = ['name', 'title', 'originalWriter', 'updateWriter', 'createdAt', 'updatedAt', 'actions'];

  news: Paginated<PacifistaNewsDTO> = new Paginated<PacifistaNewsDTO>();
  sort: string = 'createdAt:desc';
  page: number = 0;
  elemsPerPage: number = 30;

  searchQuery: QueryParam = new QueryParam();

  constructor(private newsServices: PacifistaNewsService,
              private dialog: MatDialog) {
    this.searchQuery.type = QueryBuilder.like;
  }

  ngOnInit(): void {
    this.updateList();
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

  onSearchChange(champ: string, data: string): void {
    this.searchQuery.key = champ;
    this.searchQuery.value = data;
    this.updateList();
  }

  onPaginateChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.updateList();
  }

  updateList(): void {
    const pageOption: PageOption = new PageOption();
    pageOption.sort = this.sort;
    pageOption.page = this.page;
    pageOption.elemsPerPage = this.elemsPerPage;

    const queryBuilder: QueryBuilder = new QueryBuilder();
    queryBuilder.addParam(this.searchQuery);

    this.newsServices.find(pageOption, queryBuilder).subscribe({
      next: (newsList: Paginated<PacifistaNewsDTO>) => {
        this.news = newsList;
      }
    });
  }

}
