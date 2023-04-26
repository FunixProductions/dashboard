import {Component} from '@angular/core';
import {FunixbotCommandDto} from "../../../../../services/funix-api/funixbot/dtos/funixbot-command-dto";
import {QueryParam} from "../../../../../utils/query.builder";
import {
  FunixbotCommandsCrudService
} from "../../../../../services/funix-api/funixbot/services/funixbot-commands-crud-service";
import {MatDialog} from "@angular/material/dialog";
import {FunixbotCommandsEditComponent} from "./funixbot-commands-edit/funixbot-commands-edit.component";
import {
  FunixbotCommandsRemoveModalComponent
} from "./funixbot-commands-remove-modal/funixbot-commands-remove-modal.component";
import {
  FunixbotCommandCreateModalComponent
} from "./funixbot-command-create-modal/funixbot-command-create-modal.component";
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";

@Component({
  selector: 'app-funixbot-commands',
  templateUrl: './funixbot-commands.component.html',
  styleUrls: ['./funixbot-commands.component.css']
})
export class FunixbotCommandsComponent extends ListComponent<FunixbotCommandDto, FunixbotCommandsCrudService> {

  columnsToDisplay = ['command', 'message', 'createdAt', 'updatedAt', 'actions'];

  searchCommands: QueryParam = new QueryParam();

  constructor(private funixBotCommandService: FunixbotCommandsCrudService,
              private dialog: MatDialog) {
    super(funixBotCommandService);
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

}
