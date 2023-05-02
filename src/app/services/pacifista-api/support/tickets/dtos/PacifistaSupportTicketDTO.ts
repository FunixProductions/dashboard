import ApiDTO from "../../../../core/dtos/api-dto";

export enum TicketType {
  ONLINE_PURCHASE = "ONLINE_PURCHASE",
  RECLAMATION = "RECLAMATION",
  REPORT = "REPORT",
  OTHER = "OTHER",
  BUG = "BUG"
}

export enum TicketStatus {
  CREATED = "CREATED",
  IN_PROGRESS = "IN_PROGRESS",
  SOLVED = "SOLVED"
}

export enum TicketCreationSource {
  MINECRAFT_SERVER = "MINECRAFT_SERVER",
  DISCORD = "DISCORD",
  WEB = "WEB"
}

export default class PacifistaSupportTicketDTO extends ApiDTO {
  object?: string;
  createdByName?: string;
  createdById?: string;
  creationSource?: TicketCreationSource;
  type?: TicketType;
  status?: TicketStatus;
}
