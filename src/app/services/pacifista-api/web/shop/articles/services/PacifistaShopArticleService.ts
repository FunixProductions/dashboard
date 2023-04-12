import {CrudHttpClient} from "../../../../../crud-http-client";
import PacifistaShopArticleDTO from "../dtos/PacifistaShopArticleDTO";
import {environment} from "../../../../../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class PacifistaShopArticleService extends CrudHttpClient<PacifistaShopArticleDTO> {
  override domain: string = environment.pacifistaApiUrl;
  override path: string = 'web/shop/articles';
}
