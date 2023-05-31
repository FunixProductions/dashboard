import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-capture-auth',
  templateUrl: './capture-auth.component.html',
  styleUrls: ['./capture-auth.component.css']
})
export class CaptureAuthComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(async params => {
      const jwt = params['jwt'];

      if (!jwt) {
        await this.router.navigate(['']);
      }

      await localStorage.setItem('user-token-requests', jwt);
      await this.router.navigate(['dashboard']);
    });
  }



}
