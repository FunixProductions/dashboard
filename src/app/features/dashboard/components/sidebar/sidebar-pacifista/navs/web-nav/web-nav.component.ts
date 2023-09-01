import {Component} from '@angular/core';
import {SidebarService} from "../../../SidebarService";
import {HttpClient} from "@angular/common/http";
import {UserAuthService} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../../../../../environments/environment";

@Component({
  selector: 'app-web-nav',
  templateUrl: './web-nav.component.html',
  styleUrls: ['./web-nav.component.css']
})
export class WebNavComponent extends SidebarService {

  constructor(httpClient: HttpClient) {
    super(new UserAuthService(httpClient, environment.production));
  }

}
