import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FunixbotCommandsCrudService} from "@funixproductions/funixproductions-requests";
import NotificationsService from "../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-funixbot-commands-remove-modal',
  templateUrl: './funixbot-commands-remove-modal.component.html',
  styleUrls: ['./funixbot-commands-remove-modal.component.css']
})
export class FunixbotCommandsRemoveModalComponent {

  private readonly funixBotCommandsService: FunixbotCommandsCrudService;

  constructor(public dialogRef: MatDialogRef<FunixbotCommandsRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.funixBotCommandsService = new FunixbotCommandsCrudService(httpClient, environment.production);
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
