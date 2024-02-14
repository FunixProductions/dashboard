import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-funixgaming',
  templateUrl: './sidebar-funixgaming.component.html',
  styleUrls: ['./sidebar-funixgaming.component.css']
})
export class SidebarFunixgamingComponent extends SidebarService {

  constructor(router: Router) {
    super(router);
  }

}
