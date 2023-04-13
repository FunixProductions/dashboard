import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import PacifistaShopCategoryDTO
  from "../../../../../../services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import PacifistaShopCategoryService
  from "../../../../../../services/pacifista-api/web/shop/categories/services/PacifistaShopCategoryService";

@Component({
  selector: 'app-category-creation-modal',
  templateUrl: './category-creation-modal.component.html',
  styleUrls: ['./category-creation-modal.component.css']
})
export class CategoryCreationModalComponent {

  category: PacifistaShopCategoryDTO = new PacifistaShopCategoryDTO();

  constructor(public dialogRef: MatDialogRef<CategoryCreationModalComponent>,
              private categoryService: PacifistaShopCategoryService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.categoryService.create(this.category).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    });
  }

}
