import PacifistaSupportTicketDTO from "./PacifistaSupportTicketDTO";
import ApiDTO from "../../../../core/dtos/api-dto";

export default class PacifistaSupportTicketMessageDTO extends ApiDTO {
  ticket?: PacifistaSupportTicketDTO;
  writtenByName?: string;
  writtenById?: string;
  message?: string;
}
