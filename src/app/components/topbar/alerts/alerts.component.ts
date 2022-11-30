import {Component, OnInit} from '@angular/core';
import {AlertDTO, AlertImportance} from "./dtos/alertDTO";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit{
  alerts: AlertDTO[] = [];

  ngOnInit(): void {
    let testAlert = new AlertDTO();
    testAlert.message = 'oui1';
    testAlert.importance = AlertImportance.URGENT;
    testAlert.createdAt = new Date();

    let testAlert2 = new AlertDTO();
    testAlert2.message = 'oui2';
    testAlert2.importance = AlertImportance.NORMAL;
    testAlert2.createdAt = new Date();

    let testAlert3 = new AlertDTO();
    testAlert3.message = 'oui3';
    testAlert3.importance = AlertImportance.WARNING;
    testAlert3.createdAt = new Date();

    this.alerts.push(testAlert);
    this.alerts.push(testAlert2);
    this.alerts.push(testAlert3);
  }

  getUnreadAlertsCount(): number {
    return this.alerts.length;
  }
}
