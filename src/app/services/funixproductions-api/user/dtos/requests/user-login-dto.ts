import ApiDTO from "../../../../core/dtos/api-dto";

export class UserLoginDTO extends ApiDTO {
  username: string = '';
  password: string = '';
  stayConnected: boolean = false;
}
