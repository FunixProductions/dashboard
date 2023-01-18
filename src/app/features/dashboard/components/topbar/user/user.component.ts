import {Component, OnInit} from '@angular/core';
import {UserDTO} from "../../../../../dto/funix-api/user/user-dto";
import {UserAuthService} from "../../../../../services/funix-api/user/user-auth-service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userDTO: UserDTO = new UserDTO();

  constructor(private authService: UserAuthService) {
  }

  ngOnInit(): void {
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