import {AfterViewInit, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import FunixbotAutomessageDto from "../../../../../../services/funixgaming-api/funixbot/dtos/funixbot-automessage-dto";
import NotificationsService from "../../../../../../services/core/services/NotificationsService";
import FunixbotAutomessagesService
  from "../../../../../../services/funixgaming-api/funixbot/services/funixbot-automessages-service";

@Component({
  selector: 'app-funixbot-automessage-handle-modal',
  templateUrl: './funixbot-automessage-handle-modal.component.html',
  styleUrls: ['./funixbot-automessage-handle-modal.component.css']
})
export class FunixbotAutomessageHandleModalComponent {

  automessage: FunixbotAutomessageDto;

  constructor(public dialogRef: MatDialogRef<FunixbotAutomessageHandleModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private funixBotAutomessageService: FunixbotAutomessagesService,
              private notificationService: NotificationsService) {
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
