import {Injectable} from "@angular/core";
import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {UserDTO} from "../dtos/user-dto";

@Injectable({
  providedIn: 'root'
})
export class UserCrudService extends CrudHttpClient<UserDTO> {

  override path: string = 'user';

}
