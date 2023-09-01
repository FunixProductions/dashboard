import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import NotificationsService from "../../../../../../services/NotificationService";
import {FunixbotAutomessageDto, FunixbotAutomessagesService} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-funixbot-automessage-handle-modal',
  templateUrl: './funixbot-automessage-handle-modal.component.html',
  styleUrls: ['./funixbot-automessage-handle-modal.component.css']
})
export class FunixbotAutomessageHandleModalComponent {

  private readonly funixBotAutomessageService: FunixbotAutomessagesService;
  automessage: FunixbotAutomessageDto;

  constructor(public dialogRef: MatDialogRef<FunixbotAutomessageHandleModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.funixBotAutomessageService = new FunixbotAutomessagesService(httpClient, environment.production);
    this.automessage = this.data.automessage;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.automessage.id) {
      this.funixBotAutomessageService.update(this.automessage).subscribe({
        next: () => {
          this.dialogRef.close();
          this.notificationService.success('Message mis à jour !');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    } else {
      this.funixBotAutomessageService.create(this.automessage).subscribe({
        next: () => {
          this.dialogRef.close();
          this.notificationService.success('Message crée !');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    }
  }

}
