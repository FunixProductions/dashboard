import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import NotificationsService from "../../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment";
import {PacifistaShopCategoryDTO, PacifistaShopCategoryService} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-category-creation-modal',
  templateUrl: './category-creation-modal.component.html',
  styleUrls: ['./category-creation-modal.component.css']
})
export class CategoryCreationModalComponent {

  private readonly categoryService: PacifistaShopCategoryService;
  category: PacifistaShopCategoryDTO = new PacifistaShopCategoryDTO();

  constructor(public dialogRef: MatDialogRef<CategoryCreationModalComponent>,
              private notificationService: NotificationsService,
              httpClient: HttpClient) {
    this.categoryService = new PacifistaShopCategoryService(httpClient, environment.production);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.categoryService.create(this.category).subscribe({
      next: () => {
        this.dialogRef.close();
        this.notificationService.success('Catégorie de boutique crée.');
      },
      error: err => {
        this.notificationService.onErrorRequest(err);
      }
    });
  }

}
