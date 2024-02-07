import {Component, Inject} from '@angular/core';
import {ProductAccountingService, ProductDTO} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import NotificationsService from "../../../../../../services/NotificationService";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-products-accounting-data-modal',
  templateUrl: './products-accounting-data-modal.component.html',
  styleUrl: './products-accounting-data-modal.component.css'
})
export class ProductsAccountingDataModalComponent {

  private readonly productAccountingService: ProductAccountingService;
  protected readonly isEdit: boolean;
  protected product: ProductDTO;

  constructor(httpClient: HttpClient,
              private dialogRef: MatDialogRef<ProductsAccountingDataModalComponent>,
              private notificationService: NotificationsService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productAccountingService = new ProductAccountingService(httpClient, environment.production);
    this.product = data.income ?? new ProductDTO();
    this.isEdit = data.isEdit ?? false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendRequest(): void {
    if (this.isEdit) {
      this.update();
    } else {
      this.create();
    }
  }

  private create(): void {
    this.productAccountingService.create(this.product).subscribe({
      next: () => {
        this.notificationService.info('Donnée de dépense créée avec succès');
        this.dialogRef.close();
      },
      error: (err) => {
        this.notificationService.onErrorRequest(err);
      }
    });
  }

  private update(): void {
    this.productAccountingService.patch(this.product).subscribe({
      next: () => {
        this.notificationService.info('Donnée de dépense mise à jour avec succès');
        this.dialogRef.close();
      },
      error: (err) => {
        this.notificationService.onErrorRequest(err);
      }
    });
  }

}
