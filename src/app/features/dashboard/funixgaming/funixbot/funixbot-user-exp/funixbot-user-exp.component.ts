import {Component, OnInit} from '@angular/core';
import {PageOption, Paginated} from "../../../../../services/core/dtos/paginated";
import {FunixbotUserExpDto} from "../../../../../services/funix-api/funixbot/dtos/funixbot-user-exp-dto";
import {
  FunixbotUserExpCrudService
} from "../../../../../services/funix-api/funixbot/services/funixbot-user-exp-crud-service";
import {QueryBuilder} from "../../../../../utils/query.builder";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-funixbot-user-exp',
  templateUrl: './funixbot-user-exp.component.html',
  styleUrls: ['./funixbot-user-exp.component.css']
})
export class FunixbotUserExpComponent implements OnInit {

  columnsToDisplay = ['twitch-user-id', 'level', 'xp', 'xp-next-level', 'actions'];

  users: Paginated<FunixbotUserExpDto> = new Paginated<FunixbotUserExpDto>();
  sort: string = 'level:desc,xp:desc';
  page: number = 0;
  elemsPerPage: number = 30;

  queryBuilder: QueryBuilder = new QueryBuilder();

  constructor(private funixBotUserExpService: FunixbotUserExpCrudService) {
  }

  ngOnInit(): void {
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

    this.funixBotUserExpService.find(pageOption, this.queryBuilder).subscribe({
      next: (expList: Paginated<FunixbotUserExpDto>) => {
        this.users = expList;
      }
    });
  }

}
