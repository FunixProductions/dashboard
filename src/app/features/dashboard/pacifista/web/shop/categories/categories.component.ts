import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CategoryCreationModalComponent} from "./category-creation-modal/category-creation-modal.component";
import {CategoryEditModalComponent} from "./category-edit-modal/category-edit-modal.component";
import {CategoryRemoveModalComponent} from "./category-remove-modal/category-remove-modal.component";
import {ListComponent} from "@funixproductions/funixproductions-requests";
import PacifistaShopCategoryDTO
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import PacifistaShopCategoryService
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/shop/categories/services/PacifistaShopCategoryService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends ListComponent<PacifistaShopCategoryDTO, PacifistaShopCategoryService> {

  columnsToDisplay = ['categoryName', 'createdAt', 'updatedAt', 'actions']

  constructor(httpClient: HttpClient,
              private dialog: MatDialog) {
    super(new PacifistaShopCategoryService(httpClient, environment.production));
  }

  openEditDialog(category: PacifistaShopCategoryDTO): void {
    const dialogRef = this.dialog.open(CategoryEditModalComponent, {
      data: {
        category: category
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openCreationModal(): void {
    const dialogRef = this.dialog.open(CategoryCreationModalComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openRemoveDialog(category: PacifistaShopCategoryDTO): void {
    const dialogRef = this.dialog.open(CategoryRemoveModalComponent, {
      data: {
        category: category
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }
}
