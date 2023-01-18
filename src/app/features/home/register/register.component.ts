import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  acceptCgu: boolean = false;
  acceptCgv: boolean = false;

  register(): void {
  }

}
