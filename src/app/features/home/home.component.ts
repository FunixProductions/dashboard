import {Component} from '@angular/core';
import {UserAuthService} from "../../services/funix-api/user/services/user-auth-service";
import {Router} from "@angular/router";

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
    this.userAuthService.currentUser().subscribe({
      next: () => {
        this.router.navigate(['dashboard']);
      }
    });
  }

}
