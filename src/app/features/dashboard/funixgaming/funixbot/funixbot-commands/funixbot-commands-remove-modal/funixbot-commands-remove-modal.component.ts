import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandsCrudService
} from "../../../../../../services/funixgaming-api/funixbot/services/funixbot-commands-crud-service";
import NotificationsService from "../../../../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-funixbot-commands-remove-modal',
  templateUrl: './funixbot-commands-remove-modal.component.html',
  styleUrls: ['./funixbot-commands-remove-modal.component.css']
})
export class FunixbotCommandsRemoveModalComponent {

  constructor(public dialogRef: MatDialogRef<FunixbotCommandsRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private funixBotCommandsService: FunixbotCommandsCrudService,
              private notificationService: NotificationsService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.funixBotCommandsService.delete(this.data.command.id).subscribe({
      next: () => {
        this.dialogRef.close();
        this.notificationService.success('Commande supprimée.');
      },
      error: err => {
        this.notificationService.onErrorRequest(err);
      }
    })
  }

}
