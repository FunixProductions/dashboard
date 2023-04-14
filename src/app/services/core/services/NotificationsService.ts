import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export default class NotificationsService {
  constructor(private snackBar: MatSnackBar) {
  }

  public onErrorRequest(err: HttpErrorResponse): void {
    if (err.error && err.error.error) {
      this.error('Erreur : ' + err.error.error);
    } else {
      this.error('Une erreur interne est survenue veuillez re essayer.');
    }
  }

  public success(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  public error(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 6000,
      panelClass: ['error-snackbar']
    });
  }

  public warning(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: ['warning-snackbar']
    });
  }

  public info(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }
}
