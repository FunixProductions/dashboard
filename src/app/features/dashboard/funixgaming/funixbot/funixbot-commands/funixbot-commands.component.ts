import {Component, OnInit} from '@angular/core';
import {PageOption, Paginated} from "../../../../../services/core/dtos/paginated";
import {FunixbotCommandDto} from "../../../../../services/funix-api/funixbot/dtos/funixbot-command-dto";
import {QueryBuilder, QueryParam} from "../../../../../utils/query.builder";
import {
  FunixbotCommandsCrudService
} from "../../../../../services/funix-api/funixbot/services/funixbot-commands-crud-service";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";
import {FunixbotCommandsEditComponent} from "./funixbot-commands-edit/funixbot-commands-edit.component";
import {
  FunixbotCommandsRemoveModalComponent
} from "./funixbot-commands-remove-modal/funixbot-commands-remove-modal.component";
import {
  FunixbotCommandCreateModalComponent
} from "./funixbot-command-create-modal/funixbot-command-create-modal.component";

@Component({
  selector: 'app-funixbot-commands',
  templateUrl: './funixbot-commands.component.html',
  styleUrls: ['./funixbot-commands.component.css']
})
export class FunixbotCommandsComponent implements OnInit {

  columnsToDisplay = ['command', 'message', 'createdAt', 'updatedAt', 'actions'];

  commands: Paginated<FunixbotCommandDto> = new Paginated<FunixbotCommandDto>();
  sort: string = 'createdAt:desc';
  page: number = 0;
  elemsPerPage: number = 20;

  searchCommands: QueryParam = new QueryParam();

  constructor(private funixBotCommandService: FunixbotCommandsCrudService,
              private dialog: MatDialog) {
    this.searchCommands.key = 'command';
    this.searchCommands.type = QueryBuilder.like;
  }

  ngOnInit(): void {
    this.updateList();
  }

  openEditDialog(command: FunixbotCommandDto): void {
    const dialogRef = this.dialog.open(FunixbotCommandsEditComponent, {
      data: {
        command: command
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.updateList();
    });
  }

  openCreationModal(): void {
    const dialogRef = this.dialog.open(FunixbotCommandCreateModalComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.updateList();
    });
  }

  openRemoveDialog(command: FunixbotCommandDto): void {
    const dialogRef = this.dialog.open(FunixbotCommandsRemoveModalComponent, {
      data: {
        command: command
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.updateList();
    });
  }

  onSearchChange(champ: string, data: string): void {
    if (champ === 'command') {
      this.searchCommands.value = data;
    }

    this.updateList();
  }

  onPaginateChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.updateList();
  }

  private updateList(): void {
    const pageOption: PageOption = new PageOption();
    pageOption.sort = this.sort;
    pageOption.page = this.page;
    pageOption.elemsPerPage = this.elemsPerPage;

    const queryBuilder: QueryBuilder = new QueryBuilder();
    queryBuilder.addParam(this.searchCommands);

    this.funixBotCommandService.find(pageOption, queryBuilder).subscribe({
      next: (commandList: Paginated<FunixbotCommandDto>) => {
        this.commands = commandList;
      }
    });
  }

}
