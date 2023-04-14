import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import PacifistaShopCategoryService
  from "../../../../../../../services/pacifista-api/web/shop/categories/services/PacifistaShopCategoryService";
import PacifistaShopCategoryDTO
  from "../../../../../../../services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import NotificationsService from "../../../../../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-category-remove-modal',
  templateUrl: './category-remove-modal.component.html',
  styleUrls: ['./category-remove-modal.component.css']
})
export class CategoryRemoveModalComponent {

  category: PacifistaShopCategoryDTO = new PacifistaShopCategoryDTO();

  constructor(public dialogRef: MatDialogRef<CategoryRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private categoryService: PacifistaShopCategoryService,
              private notificationService: NotificationsService) {
    this.category = data.category;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.category.id) {
      this.categoryService.delete(this.category.id).subscribe({
        next: () => {
          this.dialogRef.close();
          this.notificationService.success('Vous avz supprimé une catégorie');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    }
  }

}
