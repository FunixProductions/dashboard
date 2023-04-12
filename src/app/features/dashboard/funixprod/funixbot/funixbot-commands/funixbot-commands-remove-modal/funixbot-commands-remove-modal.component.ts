import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  FunixbotCommandsCrudService
} from "../../../../../../services/funix-api/funixbot/services/funixbot-commands-crud-service";

@Component({
  selector: 'app-funixbot-commands-remove-modal',
  templateUrl: './funixbot-commands-remove-modal.component.html',
  styleUrls: ['./funixbot-commands-remove-modal.component.css']
})
export class FunixbotCommandsRemoveModalComponent {

  constructor(public dialogRef: MatDialogRef<FunixbotCommandsRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private funixBotCommandsService: FunixbotCommandsCrudService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.funixBotCommandsService.delete(this.data.command.id).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    })
  }

}
