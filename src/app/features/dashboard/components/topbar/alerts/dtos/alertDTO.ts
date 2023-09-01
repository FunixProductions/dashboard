import ApiDTO from "@funixproductions/funixproductions-requests/lib/services/core/dtos/api-dto";

export enum AlertImportance {
  URGENT = "URGENT",
  WARNING = "WARNING",
  NORMAL = "NORMAL"
}

export class AlertDTO implements ApiDTO {
  createdAt: Date | undefined;
  id: string | undefined;
  updatedAt: Date | undefined;

  readAt: Date | undefined;
  message: string | undefined;
  importance: AlertImportance | undefined;
}
