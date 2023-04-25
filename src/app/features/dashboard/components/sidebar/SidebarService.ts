import {UserAuthService} from "../../../../services/funix-api/user/services/user-auth-service";
import {UserDTO, UserRole} from "../../../../services/funix-api/user/dtos/user-dto";

export abstract class SidebarService {

  currentUser?: UserDTO;

  protected constructor(protected authService: UserAuthService) {
    this.authService.currentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  hasAccessToPanelWithAdmin(): boolean {
    if (this.currentUser) {
      return this.currentUser.role === UserRole.ADMIN;
    } else {
      return false;
    }
  }

  hasAccessToPanelWithModo(): boolean {
    if (this.currentUser) {
      return this.currentUser.role === UserRole.ADMIN || this.currentUser.role === UserRole.MODERATOR
    } else {
      return false;
    }
  }

  hasAccessToPanelWithPacifistaAdmin(): boolean {
    if (this.currentUser) {
      return this.currentUser.role === UserRole.ADMIN || this.currentUser.role === UserRole.PACIFISTA_ADMIN
    } else {
      return false;
    }
  }

  hasAccessToPanelWithPacifistaModo(): boolean {
    if (this.currentUser) {
      return this.currentUser.role === UserRole.ADMIN || this.currentUser.role === UserRole.PACIFISTA_ADMIN || this.currentUser.role === UserRole.PACIFISTA_MODERATOR
    } else {
      return false;
    }
  }
}
