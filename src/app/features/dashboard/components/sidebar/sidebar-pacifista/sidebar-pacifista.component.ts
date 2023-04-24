import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {UserAuthService} from "../../../../../services/funix-api/user/services/user-auth-service";

@Component({
  selector: 'app-sidebar-pacifista',
  templateUrl: './sidebar-pacifista.component.html',
  styleUrls: ['./sidebar-pacifista.component.css']
})
export class SidebarPacifistaComponent extends SidebarService {

  constructor(authService: UserAuthService) {
    super(authService);
  }

}
