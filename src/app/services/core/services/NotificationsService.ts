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
      this.error('Erreur : ' + err.error.error + ' (Erreur ' + err.status + ')');
    } else {
      if (err.status === 401) {
        this.error('Vous devez être connecté pour accéder à cette ressource. (Erreur 401)');
      } else if (err.status === 403) {
        this.error('Vous n\'avez pas les droits pour accéder à cette ressource. (Erreur 403)');
      } else if (err.status === 404) {
        this.error('La ressource demandée est introuvable. (Erreur 404)');
      } else if (err.status === 400) {
        this.error('Votre requête est invalide. (Erreur 400)');
      } else {
        this.error('Une erreur interne est survenue veuillez re essayer. (Erreur ' + err.status + ')');
      }
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
