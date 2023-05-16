import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {UserAuthService} from "../../../../../services/funixproductions-api/user/services/user-auth-service";

@Component({
  selector: 'app-sidebar-funixgaming',
  templateUrl: './sidebar-funixgaming.component.html',
  styleUrls: ['./sidebar-funixgaming.component.css']
})
export class SidebarFunixgamingComponent extends SidebarService {

  constructor(authService: UserAuthService) {
    super(authService);
  }

}
