import {Component, OnInit} from '@angular/core';
import {UserDTO} from "../../../../dto/funix-api/user/user-dto";
import {PageOption, Paginated} from "../../../../dto/paginated";
import {UserCrudService} from "../../../../services/funix-api/user/user-crud-service";
import {Observable} from "rxjs";
import {QueryBuilder} from "../../../../utils/query.builder";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserRemoveModalComponent} from "./user-remove-modal/user-remove-modal.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  columnsToDisplay = ['username', 'email', 'role', 'createdAt', 'updatedAt', 'actions'];

  users: Paginated<UserDTO> = new Paginated<UserDTO>();
  sort: string = 'createdAt:desc';
  page: number = 0;

  queryBuilder = new QueryBuilder();

  constructor(private userCrudService: UserCrudService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.updateUserList();
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

    dialogRef.afterClosed().subscribe(res => {
      this.updateUserList();
    });
  }

  private updateUserList(): void {
    const pageOption: PageOption = new PageOption();
    pageOption.sort = this.sort;
    pageOption.page = this.page;

    const requestUser: Observable<Paginated<UserDTO>> = this.userCrudService.find(pageOption, this.queryBuilder);
    requestUser.subscribe({
      next: (userList: Paginated<UserDTO>) => {
        this.users = userList;
      }
    });
  }

}
