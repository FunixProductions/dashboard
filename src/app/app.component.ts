import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {UserDTO, UserRole} from "./dto/funix-api/user/user-dto";
import {UserAuthService} from "./services/funix-api/user/user-auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
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
