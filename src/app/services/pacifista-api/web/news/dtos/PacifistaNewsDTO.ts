import ApiDTO from "../../../../core/dtos/api-dto";

export default class PacifistaNewsDTO extends ApiDTO {
  originalWriter?: string;

  updateWriter?: string;

  name?: string;

  title?: string;

  subtitle?: string;

  articleImageUrl?: string;

  body?: string;

  likesAmount?: number;

  commentsAmount?: number;

}
