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

  protected queryBuilder: QueryBuilder = new QueryBuilder();
  protected pageOption: PageOption = new PageOption();

  protected constructor(protected service: SERVICE) {
    this.updateList();

    this.pageOption.sort = this.sort;
    this.pageOption.page = this.page;
    this.pageOption.elemsPerPage = this.elemsPerPage;
  }

  onSearchChange(champ: string, data: string | string[], queryType: string = QueryBuilder.like): void {
    const queryParam: QueryParam = new QueryParam();
    queryParam.key = champ;
    queryParam.type = queryType;
    queryParam.value = data;

    this.queryBuilder.addParam(queryParam);
    this.updateList();
  }

  onPaginateChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.pageOption.page = this.page;

    this.updateList();
  }

  updateList(): void {
    this.service.find(this.pageOption, this.queryBuilder).subscribe({
      next: (entitiesGot: Paginated<DTO>) => {
        this.entities = entitiesGot;
      }
    });
  }

}
