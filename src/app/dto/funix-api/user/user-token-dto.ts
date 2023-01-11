import {ApiDTO} from "../../api-dto";
import {UserDTO} from "./user-dto";

export class UserTokenDTO extends ApiDTO {
  user?: UserDTO;
  token?: string;
  expirationDate?: Date
}
