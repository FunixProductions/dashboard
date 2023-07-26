import ApiDTO from "../../../../core/dtos/api-dto";

export default class TwitchClientTokenDTO extends ApiDTO {
  userUuid?: string;
  twitchUserId?: string;
  twitchUsername?: string;
  accessToken?: string;
  expirationDateToken?: Date;
}
