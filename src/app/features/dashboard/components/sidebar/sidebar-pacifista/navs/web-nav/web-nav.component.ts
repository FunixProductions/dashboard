import {Component} from '@angular/core';
import {SidebarService} from "../../../SidebarService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-web-nav',
  templateUrl: './web-nav.component.html',
  styleUrls: ['./web-nav.component.css']
})
export class WebNavComponent extends SidebarService {

  constructor(router: Router) {
    super(router);
  }

}
