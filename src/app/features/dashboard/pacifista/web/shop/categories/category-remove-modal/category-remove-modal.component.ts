import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import PacifistaShopCategoryDTO
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import PacifistaShopCategoryService
  from "@funixproductions/funixproductions-requests/lib/services/pacifista-api/web/shop/categories/services/PacifistaShopCategoryService";
import NotificationsService from "../../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment";

@Component({
  selector: 'app-category-remove-modal',
  templateUrl: './category-remove-modal.component.html',
  styleUrls: ['./category-remove-modal.component.css']
})
export class CategoryRemoveModalComponent {

  private readonly categoryService: PacifistaShopCategoryService;
  category: PacifistaShopCategoryDTO = new PacifistaShopCategoryDTO();

  constructor(public dialogRef: MatDialogRef<CategoryRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notificationService: NotificationsService,
              httpClient: HttpClient) {
    this.categoryService = new PacifistaShopCategoryService(httpClient, environment.production);
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
