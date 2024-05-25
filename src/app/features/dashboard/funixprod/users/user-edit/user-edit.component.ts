import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserCrudService, UserDTO, UserRole} from "@funixproductions/funixproductions-requests";
import NotificationsService from "../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private readonly userService: UserCrudService;
  userToEdit?: UserDTO;
  roles: string[] = []

  constructor(private route: ActivatedRoute,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.userService = new UserCrudService(httpClient, environment.production);
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
    if (this.userToEdit == null) {
      return;
    }
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
