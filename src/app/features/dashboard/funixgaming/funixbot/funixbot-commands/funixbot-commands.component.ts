import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FunixbotCommandsEditComponent} from "./funixbot-commands-edit/funixbot-commands-edit.component";
import {
  FunixbotCommandsRemoveModalComponent
} from "./funixbot-commands-remove-modal/funixbot-commands-remove-modal.component";
import {
  FunixbotCommandCreateModalComponent
} from "./funixbot-command-create-modal/funixbot-command-create-modal.component";
import {
  FunixbotCommandDto,
  FunixbotCommandsService,
  FunixbotCommandType,
  ListComponent,
  QueryBuilder,
  QueryParam
} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-funixbot-commands',
  templateUrl: './funixbot-commands.component.html',
  styleUrls: ['./funixbot-commands.component.css']
})
export class FunixbotCommandsComponent extends ListComponent<FunixbotCommandDto, FunixbotCommandsService> {

  columnsToDisplay = ['command', 'type', 'message', 'createdAt', 'updatedAt', 'actions'];
  commandTypes = Object.values(FunixbotCommandType);

  searchCommands: QueryParam = new QueryParam();

  constructor(httpClient: HttpClient,
              private dialog: MatDialog) {
    super(new FunixbotCommandsService(httpClient, environment.production));
  }

  openEditDialog(command: FunixbotCommandDto): void {
    const dialogRef = this.dialog.open(FunixbotCommandsEditComponent, {
      data: {
        command: command
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openCreationModal(): void {
    const dialogRef = this.dialog.open(FunixbotCommandCreateModalComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  openRemoveDialog(command: FunixbotCommandDto): void {
    const dialogRef = this.dialog.open(FunixbotCommandsRemoveModalComponent, {
      data: {
        command: command
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  onCommandTypeChange(event: any) {
    let selectedCommandType: FunixbotCommandType = event.target.value;

    if (selectedCommandType) {
      super.onSearchChange('type', selectedCommandType, QueryBuilder.equal);
    } else {
      super.onSearchChange('type', '', QueryBuilder.equal);
    }
  }

}
