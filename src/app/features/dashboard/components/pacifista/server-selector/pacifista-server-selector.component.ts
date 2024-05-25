import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PacifistaServerType} from "@funixproductions/funixproductions-requests";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'pacifista-server-selector',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './pacifista-server-selector.component.html',
  styleUrl: './pacifista-server-selector.component.css'
})
export class PacifistaServerSelectorComponent {

  readonly serversTypes: PacifistaServerType[] = Object.values(PacifistaServerType);

  @Input() selectedServer?: PacifistaServerType
  @Input() idInput: string = 'server-selector';
  @Input() label: string = 'Serveur';
  @Output() onServerSelected = new EventEmitter<PacifistaServerType>();

  onSeverSelected(): void {
    this.onServerSelected.emit(this.selectedServer);
  }
}
