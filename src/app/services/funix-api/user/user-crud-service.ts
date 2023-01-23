import {Injectable} from "@angular/core";
import {CrudHttpClient} from "../../crud-http-client";
import {UserDTO} from "../../../dto/funix-api/user/user-dto";

@Injectable({
  providedIn: 'root'
})
export class UserCrudService extends CrudHttpClient<UserDTO> {

  override path: string = 'user';

}
