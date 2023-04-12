import {Component, OnInit} from '@angular/core';
import PacifistaShopCategoryService
  from "../../../../../services/pacifista-api/web/shop/categories/services/PacifistaShopCategoryService";
import {PageOption, Paginated} from "../../../../../services/core/dtos/paginated";
import PacifistaShopCategoryDTO from "../../../../../services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import {QueryBuilder, QueryParam} from "../../../../../utils/query.builder";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {CategoryCreationModalComponent} from "./category-creation-modal/category-creation-modal.component";
import {CategoryEditModalComponent} from "./category-edit-modal/category-edit-modal.component";
import {CategoryRemoveModalComponent} from "./category-remove-modal/category-remove-modal.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  columnsToDisplay = ['categoryName', 'createdAt', 'updatedAt', 'actions']

  categories: Paginated<PacifistaShopCategoryDTO> = new Paginated<PacifistaShopCategoryDTO>();
  sort: string = 'createdAt:desc';
  page: number = 0;
  elemsPerPage: number = 30;

  searchQuery: QueryParam = new QueryParam();

  constructor(private categoriesService: PacifistaShopCategoryService,
              private dialog: MatDialog) {
    this.searchQuery.key = 'name';
    this.searchQuery.type = QueryBuilder.like;
  }

  ngOnInit(): void {
    this.updateList();
  }

  openEditDialog(category: PacifistaShopCategoryDTO): void {
    const dialogRef = this.dialog.open(CategoryEditModalComponent, {
      data: {
        category: category
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.updateList();
    });
  }

  openCreationModal(): void {
    const dialogRef = this.dialog.open(CategoryCreationModalComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.updateList();
    });
  }

  openRemoveDialog(category: PacifistaShopCategoryDTO): void {
    const dialogRef = this.dialog.open(CategoryRemoveModalComponent, {
      data: {
        category: category
      }
    });

    dialogRef.afterClosed().subscribe(res => {
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

    this.categoriesService.find(pageOption, queryBuilder).subscribe({
      next: (categoriesList: Paginated<PacifistaShopCategoryDTO>) => {
        this.categories = categoriesList;
      }
    })
  }

}
