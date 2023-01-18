export enum MessageLevel {
  ERROR = "error",
  INFO = "info",
  SUCCESS = "success"
}

export class Message {
  text: string = '';
  level: MessageLevel = MessageLevel.INFO
}
