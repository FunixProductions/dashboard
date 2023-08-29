import ApiDTO from "../../../core/dtos/api-dto";
import {FunixbotCommandType} from "../enums/funixbot-command-type";

export class FunixbotCommandDto extends ApiDTO {
  command: string = '';
  message: string = '';
  type: FunixbotCommandType = FunixbotCommandType.OTHER;
}
