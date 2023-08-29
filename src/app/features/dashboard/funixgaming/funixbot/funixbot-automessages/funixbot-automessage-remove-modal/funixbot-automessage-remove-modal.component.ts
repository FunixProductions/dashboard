import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import FunixbotAutomessageDto from "../../../../../../services/funixgaming-api/funixbot/dtos/funixbot-automessage-dto";
import FunixbotAutomessagesService
  from "../../../../../../services/funixgaming-api/funixbot/services/funixbot-automessages-service";
import NotificationsService from "../../../../../../services/core/services/NotificationsService";
import {
  FunixbotCommandsRemoveModalComponent
} from "../../funixbot-commands/funixbot-commands-remove-modal/funixbot-commands-remove-modal.component";

@Component({
  selector: 'app-funixbot-automessage-remove-modal',
  templateUrl: './funixbot-automessage-remove-modal.component.html',
  styleUrls: ['./funixbot-automessage-remove-modal.component.css']
})
export class FunixbotAutomessageRemoveModalComponent {

  automessage: FunixbotAutomessageDto = new FunixbotAutomessageDto();

  constructor(public dialogRef: MatDialogRef<FunixbotCommandsRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private funixBotAutomessageService: FunixbotAutomessagesService,
              private notificationService: NotificationsService) {
    this.automessage = data.automessage;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.automessage.id) {
      this.funixBotAutomessageService.delete(this.automessage.id).subscribe({
        next: () => {
          this.dialogRef.close();
          this.notificationService.success('Message supprimé.');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    }
  }

}
