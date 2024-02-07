import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import NotificationsService from "../../../../../../services/NotificationService";
import {IncomeAccountingService, IncomeDto} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../../../../environments/environment";
import {
  IncomeAccountingDataModalComponent
} from "../income-accounting-data-modal/income-accounting-data-modal.component";

@Component({
  selector: 'app-income-accounting-delete-modal',
  templateUrl: './income-accounting-delete-modal.component.html',
  styleUrl: './income-accounting-delete-modal.component.css'
})
export class IncomeAccountingDeleteModalComponent {

  private readonly incomeAccountingService: IncomeAccountingService;
  protected readonly income: IncomeDto;

  constructor(httpClient: HttpClient,
              private dialogRef: MatDialogRef<IncomeAccountingDataModalComponent>,
              private notificationService: NotificationsService,
              @Inject(MAT_DIALOG_DATA) public data: IncomeDto) {
    this.incomeAccountingService = new IncomeAccountingService(httpClient, environment.production);
    this.income = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendRequest(): void {
    if (this.income.id) {
      this.incomeAccountingService.delete(this.income.id).subscribe({
        next: () => {
          this.notificationService.info('Donnée de revenu supprimée avec succès');
          this.dialogRef.close();
        },
        error: (err) => {
          this.notificationService.onErrorRequest(err);
        }
      });
    }
  }

}
