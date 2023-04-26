import {Injectable} from "@angular/core";
import {CrudHttpClient} from "../../../../crud-http-client";
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
  override path: string = 'support/ticket';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  fetchUserTickets(page: number = 0, elemsPerPage: number = 10, ticketId: string): Observable<Paginated<PacifistaSupportTicketMessageDTO>> {
    const params = {
      page: page.toString(),
      elemsPerPage: elemsPerPage.toString(),
      ticketid: ticketId
    };

    return this.httpClient.get<Paginated<PacifistaSupportTicketMessageDTO>>(
      this.domain + this.path + '/web',
      {headers: this.headers, params: params}
    );
  }

  createTicketFromWeb(request: PacifistaSupportTicketMessageDTO, captchaCode: string): Observable<PacifistaSupportTicketMessageDTO> {
    this.addCaptchaToHeader(captchaCode);

    return this.httpClient.post<PacifistaSupportTicketMessageDTO>(
      this.domain + this.path + '/web',
      request,
      {
        headers: this.headers
      }
    )
  }
}
