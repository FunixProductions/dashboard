import {Component} from '@angular/core';
import {SidebarService} from "../../../SidebarService";
import {UserAuthService} from "../../../../../../../services/funix-api/user/services/user-auth-service";

@Component({
  selector: 'app-tickets-nav',
  templateUrl: './tickets-nav.component.html',
  styleUrls: ['./tickets-nav.component.css']
})
export class TicketsNavComponent extends SidebarService {

  constructor(authService: UserAuthService) {
    super(authService);
  }

}
