import {ApiDTO} from "../../api-dto";

export class FunixbotUserExpDto extends ApiDTO {
  twitchUserId: string = '';
  xp: number = 0;
  xpNextLevel: number = 0;
  level: number = 0;
  lastMessageDateSeconds: bigint = BigInt(0);
}