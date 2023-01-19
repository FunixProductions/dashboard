import {ApiDTO} from "./api-dto";

export interface Paginated<T extends ApiDTO> {
  content: T[];
  actualPage: number;
  elementsPerPage: number;
  totalElementsDatabase: number;
}

export interface PageOption {
  elemsPerPage: number;
  page: number;
  sort: string;
}

export interface RequestParams {
  elemsPerPage?: number;
  page?: number;
  sort?: string;
  search?: string;
}
