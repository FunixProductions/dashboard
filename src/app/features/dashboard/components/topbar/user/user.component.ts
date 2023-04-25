import {Component} from '@angular/core';
import {UserDTO} from "../../../../../services/funix-api/user/dtos/user-dto";
import {UserAuthService} from "../../../../../services/funix-api/user/services/user-auth-service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  private userDTO: UserDTO = new UserDTO();

  constructor(private authService: UserAuthService) {
    this.authService.currentUser(this.updateCurrentUser);
  }

  private updateCurrentUser(userDTO: UserDTO): void {
    this.userDTO = userDTO;
  }

  public getUsername(): string | undefined {
    return this.userDTO.username;
  }
}
