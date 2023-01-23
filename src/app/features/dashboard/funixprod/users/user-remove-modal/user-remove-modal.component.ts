import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserCrudService} from "../../../../../services/funix-api/user/user-crud-service";

@Component({
  selector: 'app-user-remove-modal',
  templateUrl: './user-remove-modal.component.html',
  styleUrls: ['./user-remove-modal.component.css']
})
export class UserRemoveModalComponent {

  constructor(public dialogRef: MatDialogRef<UserRemoveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserCrudService) {
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
