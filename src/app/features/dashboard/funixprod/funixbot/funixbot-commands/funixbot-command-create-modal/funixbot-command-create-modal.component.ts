import {Component, Inject} from '@angular/core';
import {FunixbotCommandDto} from "../../../../../../services/funix-api/funixbot/dtos/funixbot-command-dto";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandsCrudService
} from "../../../../../../services/funix-api/funixbot/services/funixbot-commands-crud-service";

@Component({
  selector: 'app-funixbot-command-create-modal',
  templateUrl: './funixbot-command-create-modal.component.html',
  styleUrls: ['./funixbot-command-create-modal.component.css']
})
export class FunixbotCommandCreateModalComponent {

  command: FunixbotCommandDto = new FunixbotCommandDto();

  constructor(public dialogRef: MatDialogRef<FunixbotCommandCreateModalComponent>,
              private funixBotCommandsService: FunixbotCommandsCrudService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.funixBotCommandsService.create(this.command).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    })
  }

}
