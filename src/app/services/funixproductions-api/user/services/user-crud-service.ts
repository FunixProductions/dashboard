import {Injectable} from "@angular/core";
import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {UserDTO} from "../dtos/user-dto";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserCrudService extends CrudHttpClient<UserDTO> {

  override domain: string = environment.funixproductionsApiUrl;
  override path: string = 'user';

}
