import {Component, Inject} from '@angular/core';
import PacifistaShopCategoryDTO
  from "../../../../../../services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import PacifistaShopCategoryService
  from "../../../../../../services/pacifista-api/web/shop/categories/services/PacifistaShopCategoryService";

@Component({
  selector: 'app-category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent {

  category: PacifistaShopCategoryDTO = new PacifistaShopCategoryDTO();

  constructor(public dialogRef: MatDialogRef<CategoryEditModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private categoryService: PacifistaShopCategoryService) {
    this.category = data.category;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.categoryService.patch(this.category).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    })
  }

}
