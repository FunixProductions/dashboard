import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FunixprodHttpClient} from "../../../services/core/components/requests/funixprod-http-client";

@Component({
  selector: 'app-capture-auth',
  templateUrl: './capture-auth.component.html',
  styleUrls: ['./capture-auth.component.css']
})
export class CaptureAuthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      const jwt = params['jwt'];

      if (!jwt) {
        await this.router.navigate(['']);
      }

      await localStorage.setItem(FunixprodHttpClient.accessTokenLocalStorageName, jwt);
      await this.router.navigate(['dashboard']);
    });
  }

}
