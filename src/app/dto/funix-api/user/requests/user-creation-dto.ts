import {ApiDTO} from "../../../api-dto";

export class UserCreationDTO extends ApiDTO {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  acceptCGV: boolean = false;
  acceptCGU: boolean = false;
  googleCaptcha: string = '';
}
