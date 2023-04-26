import ApiDTO from "../../dtos/api-dto";
import {CrudHttpClient} from "../../../crud-http-client";
import {PageOption, Paginated} from "../../dtos/paginated";
import {QueryBuilder, QueryParam} from "../../../../utils/query.builder";
import {PageEvent} from "@angular/material/paginator";

export abstract class ListComponent<DTO extends ApiDTO, SERVICE extends CrudHttpClient<DTO>> {

  entities: Paginated<DTO> = new Paginated<DTO>();
  sort: string = 'createdAt:desc';
  page: number = 0;
  elemsPerPage: number = 30;
  searchQuery: QueryParam = new QueryParam();

  protected constructor(protected service: SERVICE) {
    this.searchQuery.type = QueryBuilder.like;
    this.updateList();
  }

  onSearchChange(champ: string, data: string): void {
    this.searchQuery.key = champ;
    this.searchQuery.value = data;
    this.updateList();
  }

  onPaginateChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.updateList();
  }

  updateList(): void {
    const pageOption: PageOption = new PageOption();
    pageOption.sort = this.sort;
    pageOption.page = this.page;
    pageOption.elemsPerPage = this.elemsPerPage;

    const queryBuilder: QueryBuilder = new QueryBuilder();
    queryBuilder.addParam(this.searchQuery);

    this.service.find(pageOption, queryBuilder).subscribe({
      next: (entitiesGot: Paginated<DTO>) => {
        this.entities = entitiesGot;
      }
    });
  }

}
