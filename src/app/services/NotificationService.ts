import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ErrorDto} from "@funixproductions/funixproductions-requests";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export default class NotificationsService {
    constructor(private snackBar: MatSnackBar,
                private router: Router) {
    }

    public onErrorRequest(err: ErrorDto, customMessage: string = ''): void {
        if (err.status === 401) {
            this.router.navigate(['login']);
        } else if (err.status === 403) {
            this.error('Vous n\'avez pas les droits pour accéder à cette ressource. (Erreur 403)' + (customMessage.length > 0 ? 'Message: ' + customMessage : ''));
        } else if (err.status === 404) {
            this.error('La ressource demandée est introuvable. (Erreur 404)' + (customMessage.length > 0 ? 'Message: ' + customMessage : ''));
        } else if (err.status === 400) {
            this.error('Une erreur est survenue dans la requête. (Erreur 400)' + (customMessage.length > 0 ? 'Message: ' + customMessage : ''));
        } else {
            this.error('Une erreur interne est survenue veuillez re essayer. (Erreur ' + err.status + ')' + (customMessage.length > 0 ? 'Message: ' + customMessage : ''));
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
