import {Component} from '@angular/core';
import {SidebarService} from "../../../SidebarService";
import {UserAuthService} from "../../../../../../../services/funixproductions-api/user/services/user-auth-service";

@Component({
  selector: 'app-web-nav',
  templateUrl: './web-nav.component.html',
  styleUrls: ['./web-nav.component.css']
})
export class WebNavComponent extends SidebarService {

  constructor(authService: UserAuthService) {
    super(authService);
  }

}
