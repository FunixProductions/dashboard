import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandDto,
  FunixbotCommandsService,
  FunixbotCommandType
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import NotificationsService from "../../../../../../services/NotificationService";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-funixbot-command-create-modal',
  templateUrl: './funixbot-command-create-modal.component.html',
  styleUrls: ['./funixbot-command-create-modal.component.css']
})
export class FunixbotCommandCreateModalComponent {

  private readonly funixBotCommandsService: FunixbotCommandsService;
  command: FunixbotCommandDto = new FunixbotCommandDto();
  commandTypes = Object.values(FunixbotCommandType);

  constructor(public dialogRef: MatDialogRef<FunixbotCommandCreateModalComponent>,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.funixBotCommandsService = new FunixbotCommandsService(httpClient, environment.production);
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
