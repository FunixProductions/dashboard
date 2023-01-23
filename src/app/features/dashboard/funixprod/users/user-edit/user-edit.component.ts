import {Component, OnInit} from '@angular/core';
import {UserDTO, UserRole} from "../../../../../dto/funix-api/user/user-dto";
import {ActivatedRoute} from "@angular/router";
import {UserCrudService} from "../../../../../services/funix-api/user/user-crud-service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userToEdit: UserDTO = new UserDTO();
  roles: string[] = []

  constructor(private route: ActivatedRoute,
              private userService: UserCrudService) {
    for (const role in UserRole) {
      this.roles.push(role);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getById(params['id']).subscribe({
        next: (user: UserDTO) => {
          this.userToEdit = user;
        }
      })
    })
  }

  saveUserEdit(): void {
    this.userService.patch(this.userToEdit).subscribe();
  }

}
