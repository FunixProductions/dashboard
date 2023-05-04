import {CrudHttpClient} from "../../../../../core/components/requests/crud-http-client";
import PacifistaShopCategoryDTO from "../dtos/PacifistaShopCategoryDTO";
import {environment} from "../../../../../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class PacifistaShopCategoryService extends CrudHttpClient<PacifistaShopCategoryDTO> {
  override domain: string = environment.pacifistaApiUrl;
  override path: string = 'web/shop/categories';
}
