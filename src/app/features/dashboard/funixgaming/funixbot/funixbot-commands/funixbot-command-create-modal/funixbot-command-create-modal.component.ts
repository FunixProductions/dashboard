import {Component} from '@angular/core';
import {FunixbotCommandDto} from "../../../../../../services/funixgaming-api/funixbot/dtos/funixbot-command-dto";
import {MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandsCrudService
} from "../../../../../../services/funixgaming-api/funixbot/services/funixbot-commands-crud-service";
import NotificationsService from "../../../../../../services/core/services/NotificationsService";
import {FunixbotCommandType} from "../../../../../../services/funixgaming-api/funixbot/enums/funixbot-command-type";
import {QueryBuilder} from "../../../../../../services/core/components/query.builder";

@Component({
  selector: 'app-funixbot-command-create-modal',
  templateUrl: './funixbot-command-create-modal.component.html',
  styleUrls: ['./funixbot-command-create-modal.component.css']
})
export class FunixbotCommandCreateModalComponent {

  command: FunixbotCommandDto = new FunixbotCommandDto();
  commandTypes = Object.values(FunixbotCommandType);

  constructor(public dialogRef: MatDialogRef<FunixbotCommandCreateModalComponent>,
              private funixBotCommandsService: FunixbotCommandsCrudService,
              private notificationService: NotificationsService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.funixBotCommandsService.create(this.command).subscribe({
      next: () => {
        this.dialogRef.close();
        this.notificationService.success('Commande crée !');
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
