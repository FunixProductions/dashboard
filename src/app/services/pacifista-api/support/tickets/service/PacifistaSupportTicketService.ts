import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import PacifistaSupportTicketDTO, {TicketStatus} from "../dtos/PacifistaSupportTicketDTO";
import {Injectable} from "@angular/core";
import {environment} from "../../../../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Paginated} from "../../../../core/dtos/paginated";

@Injectable({
  providedIn: 'root'
})
export default class PacifistaSupportTicketService extends CrudHttpClient<PacifistaSupportTicketDTO> {
  override domain: string = environment.pacifistaApiUrl;
  override path: string = 'support/ticket';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  fetchUserTickets(page: number = 0, elemsPerPage: number = 10, ticketStatus: TicketStatus[] = []): Observable<Paginated<PacifistaSupportTicketDTO>> {
    const params = {
      page: page.toString(),
      elemsPerPage: elemsPerPage.toString(),
      ticketStatus: ticketStatus.length === 0 ? 'all' : '[' + ticketStatus.join('|') + ']'
    }

    return this.httpClient.get<Paginated<PacifistaSupportTicketDTO>>(
      this.domain + this.path + '/web',
      {headers: this.headers, params: params},
    );
  }

  createTicketFromWeb(request: PacifistaSupportTicketDTO, captchaCode: string): Observable<PacifistaSupportTicketDTO> {
    this.addCaptchaToHeader(captchaCode);

    return this.httpClient.post<PacifistaSupportTicketDTO>(
      this.domain + this.path + '/web',
      request,
      {
        headers: this.headers
      }
    )
  }
}
