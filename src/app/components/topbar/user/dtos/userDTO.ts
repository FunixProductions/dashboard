import {ApiDTO} from "../../../../dto/api-dto";

export enum UserRole {
  USER = "USER",
  MODERATOR = "MODERATOR",
  PACIFISTA_MODERATOR = "PACIFISTA_MODERATOR",
  PACIFISTA_ADMIN = "PACIFISTA_ADMIN",
  ADMIN = "ADMIN"
}

export class UserDTO implements ApiDTO {
  createdAt: Date | undefined;
  id: string | undefined;
  updatedAt: Date | undefined;

  username: string | undefined;
  email: string | undefined;
  role: UserRole | undefined;
}
