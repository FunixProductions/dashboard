import {Injectable} from "@angular/core";
import {ApiDTO} from "../dto/api-dto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {PageOption, Paginated} from "../dto/paginated";
import {QueryBuilder} from "../utils/query.builder";

interface RequestParams {
  elemsPerPage?: number;
  page?: number;
  sort?: string;
  search?: string;
}

@Injectable({
  providedIn: 'root'
})
export abstract class CrudHttpClient<DTO extends ApiDTO> {

  domain: string = environment.funixApiUrl;
  path: string = '';

  private readonly headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  protected constructor(protected http: HttpClient) {
    const bearerToken: string | null = this.getBearer();

    if (bearerToken !== null) {
      this.headers = this.headers.append('Authorization', 'Bearer ' + this.getBearer());
    }
  }

  /**
   * Find and search
   * @param options set the data returned amount
   * @param queryBuilder can be null new QueryBuilder().addParam({key: "mdr", type: QueryBuilder.like, value: "mdr"})
   */
  find(options: PageOption, queryBuilder: QueryBuilder): Observable<Paginated<DTO>> {
    const params: RequestParams = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: (queryBuilder === null ? '' : queryBuilder.get())
    };

    return this.http.get<Paginated<DTO>>(this.domain + this.path, {headers: this.headers, params: {...params}});
  }

  getById(id: string): Observable<DTO> {
    return this.http.get<DTO>(this.domain + this.path + "/" + id, {headers: this.headers});
  }

  create(dto: DTO): Observable<DTO> {
    return this.http.post<DTO>(this.domain + this.path, dto, {headers: this.headers})
  }

  patch(dto: DTO): Observable<DTO> {
    return this.http.patch<DTO>(this.domain + this.path, dto, {headers: this.headers})
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.domain + this.path, {
      params: {
        id
      },
      headers: this.headers
    })
  }

  private getBearer(): string | null {
    return localStorage.getItem('user-token-requests');
  }
}
