import {Component, OnInit} from '@angular/core';
import {UserDTO} from "./dtos/userDTO";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userDTO: UserDTO = new UserDTO();

  ngOnInit(): void {
    this.userDTO.email = "test@funixgaming.fr";
    this.userDTO.username = "TestUser";
  }

  public getUsername(): string | undefined {
    return this.userDTO.username;
  }
}
