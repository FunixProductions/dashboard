import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserRemoveModalComponent} from "./user-remove-modal/user-remove-modal.component";
import {
    ListComponent,
    QueryBuilder,
    UserCrudService,
    UserDTO,
    UserRole
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent extends ListComponent<UserDTO, UserCrudService> {

    columnsToDisplay = ['username', 'email', 'role', 'valid', 'country', 'createdAt', 'updatedAt', 'actions'];

    valid: string = '';

    constructor(private router: Router,
                httpClient: HttpClient,
                private dialog: MatDialog) {
        super(new UserCrudService(httpClient, environment.production));
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

    switchValidList(): void {
        console.log(this.valid)
        if (this.valid === 'true') {
            this.onSearchChange('valid', 'true', QueryBuilder.equal);
        } else if (this.valid === 'false') {
            this.onSearchChange('valid', 'false', QueryBuilder.equal);
        } else {
            this.onSearchChange('valid', '');
        }
    }

}
