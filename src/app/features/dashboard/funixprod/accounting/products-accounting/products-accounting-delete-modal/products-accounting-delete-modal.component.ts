import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {ProductAccountingService, ProductDTO} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {
    IncomeAccountingDataModalComponent
} from "../../income-accounting/income-accounting-data-modal/income-accounting-data-modal.component";
import NotificationsService from "../../../../../../services/NotificationService";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-products-accounting-delete-modal',
  standalone: true,
    imports: [
        MatDialogContent,
        MatDialogTitle
    ],
  templateUrl: './products-accounting-delete-modal.component.html',
  styleUrl: './products-accounting-delete-modal.component.css'
})
export class ProductsAccountingDeleteModalComponent {

    private readonly productAccountingService: ProductAccountingService;
    protected readonly product: ProductDTO;

    constructor(httpClient: HttpClient,
                private dialogRef: MatDialogRef<IncomeAccountingDataModalComponent>,
                private notificationService: NotificationsService,
                @Inject(MAT_DIALOG_DATA) public data: ProductDTO) {
        this.productAccountingService = new ProductAccountingService(httpClient, environment.production);
        this.product = data;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    sendRequest(): void {
        if (this.product.id) {
            this.productAccountingService.delete(this.product.id).subscribe({
                next: () => {
                    this.notificationService.info('Donnée de dépense supprimée avec succès');
                    this.dialogRef.close();
                },
                error: (err) => {
                    this.notificationService.onErrorRequest(err);
                }
            });
        }
    }

}
