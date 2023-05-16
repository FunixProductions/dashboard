import ApiDTO from "../../../core/dtos/api-dto";

export class FunixbotCommandDto extends ApiDTO {
  command: string = '';
  message: string = '';
}
