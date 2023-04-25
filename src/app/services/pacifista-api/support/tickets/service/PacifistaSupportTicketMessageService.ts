import {Injectable} from "@angular/core";
import {CrudHttpClient} from "../../../../crud-http-client";
import {environment} from "../../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import PacifistaSupportTicketMessageDTO from "../dtos/PacifistaSupportTicketMessageDTO";

@Injectable({
  providedIn: 'root'
})
export default class PacifistaSupportTicketService extends CrudHttpClient<PacifistaSupportTicketMessageDTO> {
  override domain: string = environment.pacifistaApiUrl;
  override path: string = 'support/ticket';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  fetchUserTickets(page: number = 0, elemsPerPage: number = 10, ticketId: string): Observable<PacifistaSupportTicketMessageDTO> {
    return this.httpClient.get<PacifistaSupportTicketMessageDTO>(
      this.domain + this.path + '/web?page=' + page + "&elemsPerPage=" + elemsPerPage + "&ticketid=" + ticketId,
      {headers: this.headers}
    );
  }

  createTicketFromWeb(request: PacifistaSupportTicketMessageDTO, captchaCode: string): Observable<PacifistaSupportTicketMessageDTO> {
    super.addCaptchaToHeader(captchaCode);

    return this.httpClient.post<PacifistaSupportTicketMessageDTO>(
      this.domain + this.path + '/web',
      request,
      {
        headers: super.headers
      }
    )
  }
}
