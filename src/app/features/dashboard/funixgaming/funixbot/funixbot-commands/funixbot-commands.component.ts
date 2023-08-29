import {Component} from '@angular/core';
import {FunixbotCommandDto} from "../../../../../services/funixgaming-api/funixbot/dtos/funixbot-command-dto";
import {QueryBuilder, QueryParam} from "../../../../../services/core/components/query.builder";
import {
  FunixbotCommandsCrudService
} from "../../../../../services/funixgaming-api/funixbot/services/funixbot-commands-crud-service";
import {MatDialog} from "@angular/material/dialog";
import {FunixbotCommandsEditComponent} from "./funixbot-commands-edit/funixbot-commands-edit.component";
import {
  FunixbotCommandsRemoveModalComponent
} from "./funixbot-commands-remove-modal/funixbot-commands-remove-modal.component";
import {
  FunixbotCommandCreateModalComponent
} from "./funixbot-command-create-modal/funixbot-command-create-modal.component";
import {ListComponent} from "../../../../../services/core/components/lists/ListComponent";
import {FunixbotCommandType} from "../../../../../services/funixgaming-api/funixbot/enums/funixbot-command-type";

@Component({
  selector: 'app-funixbot-commands',
  templateUrl: './funixbot-commands.component.html',
  styleUrls: ['./funixbot-commands.component.css']
})
export class FunixbotCommandsComponent extends ListComponent<FunixbotCommandDto, FunixbotCommandsCrudService> {

  columnsToDisplay = ['command', 'type', 'message', 'createdAt', 'updatedAt', 'actions'];
  commandTypes = Object.values(FunixbotCommandType);

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

  onCommandTypeChange(event: any) {
    let selectedCommandType: FunixbotCommandType = event.target.value;

    if (selectedCommandType) {
      super.onSearchChange('type', selectedCommandType, QueryBuilder.equal);
    } else {
      super.onSearchChange('type', '', QueryBuilder.equal);
    }
  }

}
