import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {environment} from "../environments/environment";
import {getMessaging, getToken} from "firebase/messaging";
import {Router} from "@angular/router";
import PacifistaSupportTicketMessageWebsocketService
  from "./services/pacifista-api/support/tickets/service/PacifistaSupportTicketMessageWebsocketService";
import {ApiWebsocket} from "./services/core/components/websocket/ApiWebsocket";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate,
              private router: Router,
              private removeSocket: PacifistaSupportTicketMessageWebsocketService) {
  }

  ngOnInit() {
    this.checkNewDashboardVersion();
    this.requestPermissionFirebaseNotifications();
  }

  private removeThis(fcmToken: string) {
    this.removeSocket.connect().subscribe({
      next: (messageWs: string) => {
        if (messageWs === ApiWebsocket.CONNECTED_STATE) {
          this.removeSocket.sendMessage('fcm-token:' + fcmToken);
          console.log(fcmToken);
        }
      },
      complete: () => {
        this.removeThis(fcmToken);
      }
    })
  }

  private requestPermissionFirebaseNotifications() {
    const messaging = getMessaging();

    getToken(messaging, {
      vapidKey: environment.firebase.vapidKey
    }).then((currentToken) => {
      if (currentToken) {
        localStorage.setItem('firebaseToken', currentToken);
        this.removeThis(currentToken);
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
