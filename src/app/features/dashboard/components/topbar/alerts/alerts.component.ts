import {Component, OnInit} from '@angular/core';
import {AlertDTO} from "./dtos/alertDTO";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit{
  alerts: AlertDTO[] = [];

  ngOnInit(): void {
  }

  getUnreadAlertsCount(): number {
    return this.alerts.length;
  }
}
