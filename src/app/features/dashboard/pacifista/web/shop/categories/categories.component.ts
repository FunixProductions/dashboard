import {Component} from '@angular/core';
import PacifistaShopCategoryService
  from "../../../../../../services/pacifista-api/web/shop/categories/services/PacifistaShopCategoryService";
import PacifistaShopCategoryDTO
  from "../../../../../../services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import {MatDialog} from "@angular/material/dialog";
import {CategoryCreationModalComponent} from "./category-creation-modal/category-creation-modal.component";
import {CategoryEditModalComponent} from "./category-edit-modal/category-edit-modal.component";
import {CategoryRemoveModalComponent} from "./category-remove-modal/category-remove-modal.component";
import {ListComponent} from "../../../../../../services/core/components/lists/ListComponent";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends ListComponent<PacifistaShopCategoryDTO, PacifistaShopCategoryService> {

  columnsToDisplay = ['categoryName', 'createdAt', 'updatedAt', 'actions']

  constructor(private categoriesService: PacifistaShopCategoryService,
              private dialog: MatDialog) {
    super(categoriesService);
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
