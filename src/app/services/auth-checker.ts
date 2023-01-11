import {CanActivate, Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {UserAuthService} from "./funix-api/user/user-auth-service";
import {UserDTO, UserRole} from "../dto/funix-api/user/user-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthChecker implements CanActivate {

  constructor(private router: Router,
              private userAuthService: UserAuthService) {
  }

  canActivate(): Observable<boolean> {
    const user: Observable<UserDTO> = this.userAuthService.currentUser();
    let canAccess = new Subject<boolean>();

    user.subscribe({
      next: (user: UserDTO) => {
        if (user.role === UserRole.USER) {
          this.router.navigate(['login']);
          canAccess.next(false);
        } else {
          canAccess.next(true);
        }
      },
      error: () => {
        this.router.navigate(['login']);
        canAccess.next(false);
      }
    });

    return canAccess.asObservable();
  }

}
