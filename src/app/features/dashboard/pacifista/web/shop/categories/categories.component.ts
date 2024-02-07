import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CategoryCreationModalComponent} from "./category-creation-modal/category-creation-modal.component";
import {CategoryEditModalComponent} from "./category-edit-modal/category-edit-modal.component";
import {CategoryRemoveModalComponent} from "./category-remove-modal/category-remove-modal.component";
import {
  ListComponent,
  PacifistaShopCategoryDTO,
  PacifistaShopCategoryService
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends ListComponent<PacifistaShopCategoryDTO, PacifistaShopCategoryService> {

  columnsToDisplay = ['categoryName', 'description', 'createdAt', 'updatedAt', 'actions']

  constructor(httpClient: HttpClient,
              private dialog: MatDialog) {
    super(new PacifistaShopCategoryService(httpClient, environment.production));
  }

  openEditDialog(category: PacifistaShopCategoryDTO): void {
    this.dialog.open(CategoryEditModalComponent, {
      data: {
        category: category
      }
    }).afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openCreationModal(): void {
    this.dialog.open(CategoryCreationModalComponent).afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openRemoveDialog(category: PacifistaShopCategoryDTO): void {
    this.dialog.open(CategoryRemoveModalComponent, {
      data: {
        category: category
      }
    }).afterClosed().subscribe(() => {
      this.updateList();
    });
  }
}
