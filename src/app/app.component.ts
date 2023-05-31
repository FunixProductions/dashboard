import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {
    this.checkNewDashboardVersion();
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
