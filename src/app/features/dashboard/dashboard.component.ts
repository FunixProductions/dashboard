import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserAuthService, UserDTO} from "@funixproductions/funixproductions-requests";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private readonly userAuthService: UserAuthService;

  constructor(httpClient: HttpClient,
              private router: Router) {
    this.userAuthService = new UserAuthService(httpClient, environment.production);
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
