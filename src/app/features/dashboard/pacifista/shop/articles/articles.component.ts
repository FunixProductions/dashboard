import {Component, OnInit} from '@angular/core';
import {PageOption, Paginated} from "../../../../../services/core/dtos/paginated";
import PacifistaShopCategoryDTO
  from "../../../../../services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import {QueryBuilder, QueryParam} from "../../../../../utils/query.builder";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";
import PacifistaShopArticleDTO
  from "../../../../../services/pacifista-api/web/shop/articles/dtos/PacifistaShopArticleDTO";
import PacifistaShopArticleService
  from "../../../../../services/pacifista-api/web/shop/articles/services/PacifistaShopArticleService";
import {ArticleEditModalComponent} from "./article-edit-modal/article-edit-modal.component";
import {ArticleCreationModalComponent} from "./article-creation-modal/article-creation-modal.component";
import {ArticleRemoveModalComponent} from "./article-remove-modal/article-remove-modal.component";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  columnsToDisplay = ['categoryName', 'name', 'description', 'price', 'createdAt', 'updatedAt', 'actions']

  articles: Paginated<PacifistaShopArticleDTO> = new Paginated<PacifistaShopArticleDTO>();
  sort: string = 'createdAt:desc';
  page: number = 0;
  elemsPerPage: number = 30;

  searchQuery: QueryParam = new QueryParam();

  constructor(private articlesService: PacifistaShopArticleService,
              private dialog: MatDialog) {
    this.searchQuery.key = 'name';
    this.searchQuery.type = QueryBuilder.like;
  }

  ngOnInit(): void {
    this.updateList();
  }

  openEditDialog(article: PacifistaShopArticleDTO): void {
    const dialogRef = this.dialog.open(ArticleEditModalComponent, {
      data: {
        article: article
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openCreationModal(): void {
    const dialogRef = this.dialog.open(ArticleCreationModalComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
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

  onSearchChange(champ: string, data: string): void {
    if (champ === 'name') {
      this.searchQuery.value = data;
    }

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

    this.articlesService.find(pageOption, queryBuilder).subscribe({
      next: (categoriesList: Paginated<PacifistaShopCategoryDTO>) => {
        this.articles = categoriesList;
      }
    })
  }

}
