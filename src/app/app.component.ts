import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {environment} from "../environments/environment";
import {getMessaging, getToken} from "firebase/messaging";
import PacifistaSupportTicketService
  from "./services/pacifista-api/support/tickets/service/PacifistaSupportTicketService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate,
              private pacifistaticketservice: PacifistaSupportTicketService) {
  }

  ngOnInit() {
    this.checkNewDashboardVersion();
    this.requestPermissionFirebaseNotifications();
  }

  private requestPermissionFirebaseNotifications() {
    const messaging = getMessaging();

    getToken(messaging, {
      vapidKey: environment.firebase.vapidKey
    }).then((currentToken) => {
      if (currentToken) {
        localStorage.setItem('firebaseToken', currentToken);
        this.pacifistaticketservice.sendFcm(currentToken).subscribe();
      } else {
        localStorage.removeItem('firebaseToken');
        console.error('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      localStorage.removeItem('firebaseToken');
      console.error('An error occurred while retrieving token for notifications. ', err);
    });
  }

  private checkNewDashboardVersion() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event) => {
        if (event.type === 'VERSION_DETECTED') {
          if (confirm("Une nouvelle version du dashboard est disponible. Voulez-vous recharger la page ?")) {
            window.location.reload();
          }
        }
      });
    }
  }
}
