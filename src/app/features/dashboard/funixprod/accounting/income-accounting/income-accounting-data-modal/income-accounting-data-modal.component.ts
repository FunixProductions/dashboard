import {Component, Inject} from '@angular/core';
import {IncomeAccountingService, IncomeDto} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import NotificationsService from "../../../../../../services/NotificationService";

@Component({
  selector: 'app-income-accounting-data-modal',
  templateUrl: './income-accounting-data-modal.component.html',
  styleUrl: './income-accounting-data-modal.component.css'
})
export class IncomeAccountingDataModalComponent {

  private readonly incomeAccountingService: IncomeAccountingService;
  protected readonly isEdit: boolean;
  protected income: IncomeDto;

  constructor(httpClient: HttpClient,
              private dialogRef: MatDialogRef<IncomeAccountingDataModalComponent>,
              private notificationService: NotificationsService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.incomeAccountingService = new IncomeAccountingService(httpClient, environment.production);
    this.income = data.income ?? new IncomeDto();
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
    this.incomeAccountingService.create(this.income).subscribe({
      next: () => {
        this.notificationService.info('Donnée de revenu créée avec succès');
        this.dialogRef.close();
      },
      error: (err) => {
        this.notificationService.onErrorRequest(err);
      }
    });
  }

  private update(): void {
    this.incomeAccountingService.patch(this.income).subscribe({
      next: () => {
        this.notificationService.info('Donnée de revenu mise à jour avec succès');
        this.dialogRef.close();
      },
      error: (err) => {
        this.notificationService.onErrorRequest(err);
      }
    });
  }

}
