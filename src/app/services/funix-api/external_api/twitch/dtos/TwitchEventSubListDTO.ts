export class TwitchEventSubListDTO {
  total?: number;
  data: Array<TwitchEventSub> = [];
  total_cost?: number;
  max_total_cost?: number;
  pagination?: Pagination;

  hasPagination(): string | undefined {
    if (this.pagination !== null && this.pagination?.cursor !== null) {
      return this.pagination?.cursor;
    } else {
      return undefined;
    }
  }
}

export class TwitchEventSub {
  id?: string;
  status?: string;
  type?: string;
  condition?: Condition;
  created_at?: Date;
  cost?: number;
}

export class Condition {
  broadcaster_user_id?: string;
  moderator_user_id?: string;
  from_broadcaster_user_id?: string;
  to_broadcaster_user_id?: string;
  reward_id?: string;
}

export class Pagination {
  cursor?: string;
}
