import {Component} from '@angular/core';
import {SidebarService} from "../SidebarService";
import {UserAuthService} from "../../../../../services/funix-api/user/services/user-auth-service";

@Component({
  selector: 'app-sidebar-funixprod',
  templateUrl: './sidebar-funixprod.component.html',
  styleUrls: ['./sidebar-funixprod.component.css']
})
export class SidebarFunixprodComponent extends SidebarService {

  constructor(authService: UserAuthService) {
    super(authService);
  }

}
