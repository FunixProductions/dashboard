import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {HttpClient} from "@angular/common/http";
import {UserAuthService} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-sidebar-funixgaming',
  templateUrl: './sidebar-funixgaming.component.html',
  styleUrls: ['./sidebar-funixgaming.component.css']
})
export class SidebarFunixgamingComponent extends SidebarService {

  constructor(httpClient: HttpClient) {
    super(new UserAuthService(httpClient, environment.production));
  }

}
