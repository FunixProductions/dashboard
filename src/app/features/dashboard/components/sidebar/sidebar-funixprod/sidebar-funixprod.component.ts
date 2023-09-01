import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {HttpClient} from "@angular/common/http";
import {UserAuthService} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-sidebar-funixprod',
  templateUrl: './sidebar-funixprod.component.html',
  styleUrls: ['./sidebar-funixprod.component.css']
})
export class SidebarFunixprodComponent extends SidebarService {

  constructor(httpClient: HttpClient) {
    super(new UserAuthService(httpClient, environment.production));
  }

}
