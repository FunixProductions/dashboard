import {Component} from '@angular/core';
import {IncomeAccountingService, IncomeDto, ListComponent} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../../../../../environments/environment";
import {
  IncomeAccountingDeleteModalComponent
} from "./income-accounting-delete-modal/income-accounting-delete-modal.component";
import {
  IncomeAccountingDataModalComponent
} from "./income-accounting-data-modal/income-accounting-data-modal.component";

@Component({
  selector: 'app-income-accounting',
  templateUrl: './income-accounting.component.html',
  styleUrl: './income-accounting.component.css'
})
export class IncomeAccountingComponent extends ListComponent<IncomeDto, IncomeAccountingService> {

  columnsToDisplay = ['incomeName', 'incomeDescription', 'amount', 'createdAt', 'actions'];

  constructor(httpClient: HttpClient,
              private dialog: MatDialog) {
    super(new IncomeAccountingService(httpClient, environment.production));
  }

  openRemoveDialog(incomeDto: IncomeDto): void {
    this.dialog.open(IncomeAccountingDeleteModalComponent, {
      data: incomeDto
    }).afterClosed().subscribe(() => {
      this.updateList()
    });
  }

  openEditDialog(incomeDto: IncomeDto): void {
    this.dialog.open(IncomeAccountingDataModalComponent, {
      data: {
        income: incomeDto,
        isEdit: true
      }
    }).afterClosed().subscribe(() => {
      this.updateList()
    });
  }

  openCreateDialog(): void {
    this.dialog.open(IncomeAccountingDataModalComponent, {
      data: {
        income: new IncomeDto(),
        isEdit: false
      }
    }).afterClosed().subscribe(() => {
      this.updateList()
    });
  }

}
