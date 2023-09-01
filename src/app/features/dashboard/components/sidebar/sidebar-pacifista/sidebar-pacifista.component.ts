import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {UserAuthService} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sidebar-pacifista',
  templateUrl: './sidebar-pacifista.component.html',
  styleUrls: ['./sidebar-pacifista.component.css']
})
export class SidebarPacifistaComponent extends SidebarService {

  constructor(httpClient: HttpClient) {
    super(new UserAuthService(httpClient, environment.production));
  }

}
