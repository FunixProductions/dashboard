import {Component} from '@angular/core';
import {UserDTO, UserRole} from "../../../../services/funixproductions-api/user/dtos/user-dto";
import {UserCrudService} from "../../../../services/funixproductions-api/user/services/user-crud-service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserRemoveModalComponent} from "./user-remove-modal/user-remove-modal.component";
import {ListComponent} from "../../../../services/core/components/lists/ListComponent";
import {QueryBuilder} from "../../../../services/core/components/query.builder";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends ListComponent<UserDTO, UserCrudService> {

  columnsToDisplay = ['username', 'email', 'role', 'createdAt', 'updatedAt', 'actions'];

  constructor(userCrudService: UserCrudService,
              private router: Router,
              private dialog: MatDialog) {
    super(userCrudService);
  }

  getEditUrl(userDto: UserDTO): string {
    return this.router.url + '/' + userDto.id;
  }

  openRemoveDialog(userDto: UserDTO): void {
    const dialogRef = this.dialog.open(UserRemoveModalComponent, {
      data: {
        user: userDto
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateList();
    });
  }

  switchRoleList(onlyStaff: boolean): void {
    if (onlyStaff) {
      this.onSearchChange('role', [UserRole.ADMIN, UserRole.PACIFISTA_ADMIN, UserRole.PACIFISTA_MODERATOR, UserRole.MODERATOR], QueryBuilder.equal);
    } else {
      this.onSearchChange('role', '');
    }
  }

}
