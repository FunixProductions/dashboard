import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import NotificationsService from "../../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment";
import {PacifistaShopCategoryDTO, PacifistaShopCategoryService} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent {

  private readonly categoryService: PacifistaShopCategoryService;
  category: PacifistaShopCategoryDTO = new PacifistaShopCategoryDTO();

  constructor(public dialogRef: MatDialogRef<CategoryEditModalComponent>,
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
    this.categoryService.patch(this.category).subscribe({
      next: () => {
        this.dialogRef.close();
        this.notificationService.success('Catégorie mise à jour.');
      },
      error: err => {
        this.notificationService.onErrorRequest(err);
      }
    })
  }

}
