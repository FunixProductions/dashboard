import { Component } from '@angular/core';
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";
import FunixbotAutomessageDto from "../../../../../services/funixgaming-api/funixbot/dtos/funixbot-automessage-dto";
import FunixbotAutomessagesService
  from "../../../../../services/funixgaming-api/funixbot/services/funixbot-automessages-service";
import {MatDialog} from "@angular/material/dialog";
import {
  FunixbotAutomessageHandleModalComponent
} from "./funixbot-automessage-handle-modal/funixbot-automessage-handle-modal.component";
import {
  FunixbotAutomessageRemoveModalComponent
} from "./funixbot-automessage-remove-modal/funixbot-automessage-remove-modal.component";

@Component({
  selector: 'app-funixbot-automessages',
  templateUrl: './funixbot-automessages.component.html',
  styleUrls: ['./funixbot-automessages.component.css']
})
export class FunixbotAutomessagesComponent extends ListComponent<FunixbotAutomessageDto, FunixbotAutomessagesService> {

  columnsToDisplay = ['message', 'gameName', 'isAnnounced', 'createdAt', 'updatedAt', 'actions'];

  constructor(funixBotAutomessageService: FunixbotAutomessagesService,
              private dialog: MatDialog) {
    super(funixBotAutomessageService);
  }

  openCreationModal(): void {
    const dialogRef = this.dialog.open(FunixbotAutomessageHandleModalComponent, {
      data: {
        automessage: new FunixbotAutomessageDto()
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openEditDialog(automessage: FunixbotAutomessageDto): void {
    const dialogRef = this.dialog.open(FunixbotAutomessageHandleModalComponent, {
      data: {
        automessage: automessage
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openRemoveDialog(automessage: FunixbotAutomessageDto): void {
    const dialogRef = this.dialog.open(FunixbotAutomessageRemoveModalComponent, {
      data: {
        automessage: automessage
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

}
