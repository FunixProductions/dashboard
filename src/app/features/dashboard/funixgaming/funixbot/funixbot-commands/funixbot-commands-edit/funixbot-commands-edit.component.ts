import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandsCrudService
} from "../../../../../../services/funixgaming-api/funixbot/services/funixbot-commands-crud-service";
import {FunixbotCommandDto} from "../../../../../../services/funixgaming-api/funixbot/dtos/funixbot-command-dto";
import NotificationsService from "../../../../../../services/core/services/NotificationsService";
import {FunixbotCommandType} from "../../../../../../services/funixgaming-api/funixbot/enums/funixbot-command-type";

@Component({
  selector: 'app-funixbot-commands-edit',
  templateUrl: './funixbot-commands-edit.component.html',
  styleUrls: ['./funixbot-commands-edit.component.css']
})
export class FunixbotCommandsEditComponent {

  command: FunixbotCommandDto = new FunixbotCommandDto();
  commandTypes = Object.values(FunixbotCommandType);

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

  onCommandTypeChange(event: any) {
    let selectedCommandType: FunixbotCommandType = event.target.value;

    if (selectedCommandType) {
      this.command.type = selectedCommandType;
    } else {
      this.command.type = FunixbotCommandType.OTHER;
    }
  }

}
