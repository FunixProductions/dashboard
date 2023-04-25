import {CrudHttpClient} from "../../../../crud-http-client";
import PacifistaSupportTicketDTO from "../dtos/PacifistaSupportTicketDTO";
import {Injectable} from "@angular/core";
import {environment} from "../../../../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export default class PacifistaSupportTicketService extends CrudHttpClient<PacifistaSupportTicketDTO> {
  override domain: string = environment.pacifistaApiUrl;
  override path: string = 'support/ticket';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  fetchUserTickets(page: number = 0, elemsPerPage: number = 10): Observable<PacifistaSupportTicketDTO> {
    return this.httpClient.get<PacifistaSupportTicketDTO>(
      this.domain + this.path + '/web?page=' + page + "&elemsPerPage=" + elemsPerPage,
      {headers: this.headers}
    );
  }

  createTicketFromWeb(request: PacifistaSupportTicketDTO, captchaCode: string): Observable<PacifistaSupportTicketDTO> {
    super.addCaptchaToHeader(captchaCode);

    return this.httpClient.post<PacifistaSupportTicketDTO>(
      this.domain + this.path + '/web',
      request,
      {
        headers: super.headers
      }
    )
  }
}
