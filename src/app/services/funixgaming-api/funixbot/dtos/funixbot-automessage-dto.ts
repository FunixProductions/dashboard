import ApiDTO from "../../../core/dtos/api-dto";

export default class FunixbotAutomessageDto extends ApiDTO {
  message?: string = '';
  gameName?: string = '';
  isAnnounced: boolean = false;
}
