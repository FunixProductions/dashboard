import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandDto,
  FunixbotCommandsCrudService,
  FunixbotCommandType
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import NotificationsService from "../../../../../../services/NotificationService";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-funixbot-commands-edit',
  templateUrl: './funixbot-commands-edit.component.html',
  styleUrls: ['./funixbot-commands-edit.component.css']
})
export class FunixbotCommandsEditComponent {

  private readonly funixBotCommandsService: FunixbotCommandsCrudService;
  command: FunixbotCommandDto = new FunixbotCommandDto();
  commandTypes = Object.values(FunixbotCommandType);

  constructor(public dialogRef: MatDialogRef<FunixbotCommandsEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.funixBotCommandsService = new FunixbotCommandsCrudService(httpClient, environment.production);
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
