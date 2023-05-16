import {Component} from '@angular/core';
import {UserDTO} from "../../../../../services/funixproductions-api/user/dtos/user-dto";
import {UserAuthService} from "../../../../../services/funixproductions-api/user/services/user-auth-service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  private userDTO: UserDTO = new UserDTO();

  constructor(private authService: UserAuthService) {
    this.authService.currentUser().subscribe({
      next: (user: UserDTO) => {
        this.userDTO = user;
      }
    });
  }

  public getUsername(): string | undefined {
    return this.userDTO.username;
  }
}
