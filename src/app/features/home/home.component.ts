import {Component} from '@angular/core';
import {UserAuthService} from "../../services/funix-api/user/services/user-auth-service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserDTO, UserRole} from "../../services/funix-api/user/dtos/user-dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userAuthService: UserAuthService,
              private router: Router) {
    this.canActivate();
  }

  canActivate(): void {
    const user: Observable<UserDTO> = this.userAuthService.currentUser();

    user.subscribe({
      next: (user: UserDTO) => {
        if (user.role !== UserRole.USER) {
          this.router.navigate(['dashboard']);
        }
      }
    });
  }

}
