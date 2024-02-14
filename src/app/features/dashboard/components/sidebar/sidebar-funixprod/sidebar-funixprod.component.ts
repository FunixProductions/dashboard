import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-funixprod',
  templateUrl: './sidebar-funixprod.component.html',
  styleUrls: ['./sidebar-funixprod.component.css']
})
export class SidebarFunixprodComponent extends SidebarService {

  constructor(router: Router) {
    super(router);
  }

}
