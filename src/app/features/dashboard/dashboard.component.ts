import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/funix-api/user/user-auth-service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserDTO, UserRole} from "../../dto/funix-api/user/user-dto";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private userAuthService: UserAuthService,
              private router: Router) {
    this.canActivate();
  }

  canActivate(): void {
    const user: Observable<UserDTO> = this.userAuthService.currentUser();

    user.subscribe({
      next: (user: UserDTO) => {
        if (user.role === UserRole.USER) {
          this.router.navigate(['login']);
        }
      },
      error: () => {
        this.router.navigate(['login']);
      }
    });
  }

}
