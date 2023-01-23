import {Component, OnInit} from '@angular/core';
import {UserDTO} from "../../../../dto/funix-api/user/user-dto";
import {PageOption, Paginated} from "../../../../dto/paginated";
import {UserCrudService} from "../../../../services/funix-api/user/user-crud-service";
import {Observable} from "rxjs";
import {QueryBuilder, QueryParam} from "../../../../utils/query.builder";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserRemoveModalComponent} from "./user-remove-modal/user-remove-modal.component";
import {PageEvent} from "@angular/material/paginator";

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
  elemsPerPage: number = 20;

  searchUsername: QueryParam = new QueryParam();
  searchEmail: QueryParam = new QueryParam();
  searchRole: QueryParam = new QueryParam();

  queryBuilder = new QueryBuilder();

  constructor(private userCrudService: UserCrudService,
              private router: Router,
              private dialog: MatDialog) {
    this.searchUsername.key = 'username';
    this.searchUsername.type = QueryBuilder.like;

    this.searchEmail.key = 'email';
    this.searchEmail.type = QueryBuilder.like;

    this.searchRole.key = 'role'
    this.searchRole.type = QueryBuilder.notEqual;
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

  onSearchChange(champ: string, data: string): void {
    if (champ === 'username') {
      this.searchUsername.value = data;
    } else if (champ === 'email') {
      this.searchEmail.value = data;
    } else if (champ === 'role') {
      if (data === 'true') {
        this.searchRole.value = 'USER';
      } else {
        this.searchRole.value = '';
      }
    }

    this.updateUserList();
  }

  onPaginateChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.updateUserList();
  }

  private updateUserList(): void {
    const pageOption: PageOption = new PageOption();
    pageOption.sort = this.sort;
    pageOption.page = this.page;
    pageOption.elemsPerPage = this.elemsPerPage;

    this.queryBuilder = new QueryBuilder();
    this.queryBuilder.addParam(this.searchUsername);
    this.queryBuilder.addParam(this.searchEmail);
    this.queryBuilder.addParam(this.searchRole);

    this.userCrudService.find(pageOption, this.queryBuilder).subscribe({
      next: (userList: Paginated<UserDTO>) => {
        this.users = userList;
      }
    });
  }

}
