import {UserJwtCheckerService, UserRole} from "@funixproductions/funixproductions-requests";
import {Router} from "@angular/router";

export abstract class SidebarService {

  protected readonly currentRoute: string;
  private readonly jwtCheckerService: UserJwtCheckerService;

  protected constructor(router: Router) {
    this.jwtCheckerService = new UserJwtCheckerService();
    this.currentRoute = router.url;
  }

  hasAccessToPanelWithAdmin(): boolean {
    return this.jwtCheckerService.hasRole(UserRole.ADMIN);
  }

  hasAccessToPanelWithModo(): boolean {
    return this.jwtCheckerService.hasRole(UserRole.ADMIN) || this.jwtCheckerService.hasRole(UserRole.MODERATOR);
  }

  hasAccessToPanelWithPacifistaAdmin(): boolean {
    return this.jwtCheckerService.hasRole(UserRole.ADMIN) || this.jwtCheckerService.hasRole(UserRole.PACIFISTA_ADMIN);
  }

  hasAccessToPanelWithPacifistaModo(): boolean {
    return this.jwtCheckerService.hasRole(UserRole.ADMIN) || this.jwtCheckerService.hasRole(UserRole.PACIFISTA_ADMIN) || this.jwtCheckerService.hasRole(UserRole.PACIFISTA_MODERATOR);
  }
}
