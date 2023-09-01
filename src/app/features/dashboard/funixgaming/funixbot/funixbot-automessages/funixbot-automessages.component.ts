import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  FunixbotAutomessageHandleModalComponent
} from "./funixbot-automessage-handle-modal/funixbot-automessage-handle-modal.component";
import {
  FunixbotAutomessageRemoveModalComponent
} from "./funixbot-automessage-remove-modal/funixbot-automessage-remove-modal.component";
import {
  FunixbotAutomessageDto,
  FunixbotAutomessagesService,
  ListComponent
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-funixbot-automessages',
  templateUrl: './funixbot-automessages.component.html',
  styleUrls: ['./funixbot-automessages.component.css']
})
export class FunixbotAutomessagesComponent extends ListComponent<FunixbotAutomessageDto, FunixbotAutomessagesService> {

  columnsToDisplay = ['message', 'gameName', 'isAnnounced', 'createdAt', 'updatedAt', 'actions'];

  constructor(httpCLient: HttpClient,
              private dialog: MatDialog) {
    super(new FunixbotAutomessagesService(httpCLient, environment.production));
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
