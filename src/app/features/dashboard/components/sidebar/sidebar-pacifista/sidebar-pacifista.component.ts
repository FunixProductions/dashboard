import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-pacifista',
  templateUrl: './sidebar-pacifista.component.html',
  styleUrls: ['./sidebar-pacifista.component.css']
})
export class SidebarPacifistaComponent extends SidebarService {

  constructor(private router: Router) {
    super(router);
  }

}
