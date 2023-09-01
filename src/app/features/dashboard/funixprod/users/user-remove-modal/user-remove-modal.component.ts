import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserCrudService} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-user-remove-modal',
  templateUrl: './user-remove-modal.component.html',
  styleUrls: ['./user-remove-modal.component.css']
})
export class UserRemoveModalComponent {

  private readonly userService: UserCrudService;

  constructor(public dialogRef: MatDialogRef<UserRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              httpClient: HttpClient) {
    this.userService = new UserCrudService(httpClient, environment.production);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.userService.delete(this.data.user.id).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    })
  }

}
