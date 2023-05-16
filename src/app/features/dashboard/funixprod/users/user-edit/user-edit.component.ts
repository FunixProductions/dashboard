import {Component, OnInit} from '@angular/core';
import {UserDTO, UserRole} from "../../../../../services/funixproductions-api/user/dtos/user-dto";
import {ActivatedRoute} from "@angular/router";
import {UserCrudService} from "../../../../../services/funixproductions-api/user/services/user-crud-service";
import NotificationsService from "../../../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userToEdit: UserDTO = new UserDTO();
  roles: string[] = []

  constructor(private route: ActivatedRoute,
              private userService: UserCrudService,
              private notificationService: NotificationsService) {
    for (const role in UserRole) {
      this.roles.push(role);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getById(params['id']).subscribe({
        next: (user: UserDTO) => {
          this.userToEdit = user;
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      })
    })
  }

  saveUserEdit(): void {
    this.userService.patch(this.userToEdit).subscribe({
      next: (user: UserDTO) => {
        this.userToEdit = user;
        this.notificationService.success('Utilisateur ' + user.username + ' mis à jour.');
      },
      error: err => {
        this.notificationService.onErrorRequest(err);
      }
    });
  }

}
