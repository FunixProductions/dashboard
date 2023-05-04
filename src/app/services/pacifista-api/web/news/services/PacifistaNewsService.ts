import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import PacifistaNewsDTO from "../dtos/PacifistaNewsDTO";
import {environment} from "../../../../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class PacifistaNewsService extends CrudHttpClient<PacifistaNewsDTO> {
  override domain: string = environment.pacifistaApiUrl;
  override path: string = 'web/news';
}
