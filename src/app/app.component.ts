import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "./services/funix-api/user/services/user-auth-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: UserAuthService) {
  }

  ngOnInit(): void {
    this.authService.currentUser().subscribe();
  }

}
