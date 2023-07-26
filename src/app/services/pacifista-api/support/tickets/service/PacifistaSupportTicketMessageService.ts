import {Injectable} from "@angular/core";
import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import {environment} from "../../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import PacifistaSupportTicketMessageDTO from "../dtos/PacifistaSupportTicketMessageDTO";
import {Paginated} from "../../../../core/dtos/paginated";

@Injectable({
  providedIn: 'root'
})
export default class PacifistaSupportTicketMessageService extends CrudHttpClient<PacifistaSupportTicketMessageDTO> {
  override domain: string = environment.pacifistaApiUrl;
  override path: string = 'support/ticket/message';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  fetchUserTicketMessages(page: number = 0, elemsPerPage: number = 10, ticketId: string): Observable<Paginated<PacifistaSupportTicketMessageDTO>> {
    const params = {
      page: page.toString(),
      elemsPerPage: elemsPerPage.toString(),
      ticketId: ticketId
    };

    return this.httpClient.get<Paginated<PacifistaSupportTicketMessageDTO>>(
      this.domain + this.path + '/web',
      {headers: super.getHeaders(), params: params}
    );
  }

  createTicketMessageFromWeb(request: PacifistaSupportTicketMessageDTO, captchaCode: string): Observable<PacifistaSupportTicketMessageDTO> {
    return this.httpClient.post<PacifistaSupportTicketMessageDTO>(
      this.domain + this.path + '/web',
      request,
      {
        headers: super.getHeaders(captchaCode)
      }
    )
  }
}
