import {UserJwtCheckerService, UserRole} from "@funixproductions/funixproductions-requests";

export abstract class SidebarService {

  private jwtCheckerService: UserJwtCheckerService;

  protected constructor() {
    this.jwtCheckerService = new UserJwtCheckerService();
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
