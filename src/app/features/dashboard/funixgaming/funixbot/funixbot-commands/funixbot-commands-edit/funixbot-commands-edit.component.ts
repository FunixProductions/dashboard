import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandsCrudService
} from "../../../../../../services/funix-api/funixbot/services/funixbot-commands-crud-service";
import {FunixbotCommandDto} from "../../../../../../services/funix-api/funixbot/dtos/funixbot-command-dto";
import NotificationsService from "../../../../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-funixbot-commands-edit',
  templateUrl: './funixbot-commands-edit.component.html',
  styleUrls: ['./funixbot-commands-edit.component.css']
})
export class FunixbotCommandsEditComponent {

  command: FunixbotCommandDto = new FunixbotCommandDto();

  constructor(public dialogRef: MatDialogRef<FunixbotCommandsEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private funixBotCommandsService: FunixbotCommandsCrudService,
              private notificationService: NotificationsService) {
    this.command = data.command;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.funixBotCommandsService.patch(this.command).subscribe({
      next: () => {
        this.dialogRef.close();
        this.notificationService.success('Commande mise à jour.');
      },
      error: err => {
        this.notificationService.onErrorRequest(err);
      }
    })
  }

}
