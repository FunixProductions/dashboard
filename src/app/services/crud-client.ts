import {Injectable} from "@angular/core";
import {ApiDTO} from "../dto/api-dto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class CrudClient<DTO extends ApiDTO> {
  protected constructor(http: HttpClient) {
  }
}
