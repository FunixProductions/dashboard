import {Component, Input} from '@angular/core';
import {AlertDTO, AlertImportance} from "../dtos/alertDTO";

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.css']
})
export class AlertContainerComponent {
  @Input() alert: AlertDTO = new AlertDTO();
  AlertImportance = AlertImportance;
}
