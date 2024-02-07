import {Component} from '@angular/core';
import {ListComponent, ProductAccountingService, ProductDTO} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../../../../../environments/environment";
import {
  ProductsAccountingDeleteModalComponent
} from "./products-accounting-delete-modal/products-accounting-delete-modal.component";
import {
  ProductsAccountingDataModalComponent
} from "./products-accounting-data-modal/products-accounting-data-modal.component";

@Component({
  selector: 'app-products-accounting',
  templateUrl: './products-accounting.component.html',
  styleUrl: './products-accounting.component.css'
})
export class ProductsAccountingComponent extends ListComponent<ProductDTO, ProductAccountingService> {

  columnsToDisplay = ['productName', 'productDescription', 'monthly', 'isEu', 'isPhysical', 'amountHT', 'amountTax', 'createdAt', 'actions'];

  constructor(httpClient: HttpClient,
              private dialog: MatDialog) {
    super(new ProductAccountingService(httpClient, environment.production));
  }

  openRemoveDialog(productDTO: ProductDTO): void {
    this.dialog.open(ProductsAccountingDeleteModalComponent, {
      data: productDTO
    }).afterClosed().subscribe(() => {
      this.updateList()
    });
  }

  openEditDialog(productDTO: ProductDTO): void {
    this.dialog.open(ProductsAccountingDataModalComponent, {
      data: {
        product: productDTO,
        isEdit: true
      }
    }).afterClosed().subscribe(() => {
      this.updateList()
    });
  }

  openCreateDialog(): void {
    this.dialog.open(ProductsAccountingDataModalComponent, {
      data: {
        product: new ProductDTO(),
        isEdit: false
      }
    }).afterClosed().subscribe(() => {
      this.updateList()
    });
  }

}
