import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandsRemoveModalComponent
} from "../../funixbot-commands/funixbot-commands-remove-modal/funixbot-commands-remove-modal.component";
import FunixbotAutomessageDto
  from "@funixproductions/funixproductions-requests/lib/services/funixgaming-api/funixbot/dtos/funixbot-automessage-dto";
import FunixbotAutomessagesService
  from "@funixproductions/funixproductions-requests/lib/services/funixgaming-api/funixbot/services/funixbot-automessages-service";
import NotificationsService from "../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-funixbot-automessage-remove-modal',
  templateUrl: './funixbot-automessage-remove-modal.component.html',
  styleUrls: ['./funixbot-automessage-remove-modal.component.css']
})
export class FunixbotAutomessageRemoveModalComponent {

  private readonly funixBotAutomessageService: FunixbotAutomessagesService;
  automessage: FunixbotAutomessageDto = new FunixbotAutomessageDto();

  constructor(public dialogRef: MatDialogRef<FunixbotCommandsRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.funixBotAutomessageService = new FunixbotAutomessagesService(httpClient, environment.production);
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
