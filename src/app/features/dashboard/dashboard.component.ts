import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/funix-api/user/services/user-auth-service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserDTO} from "../../services/funix-api/user/dtos/user-dto";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.canActivate();
  }

  canActivate(): void {
    const user: Observable<UserDTO> = this.userAuthService.currentUser();

    user.subscribe({
      error: () => {
        this.router.navigate(['login']);
      }
    });
  }

}
