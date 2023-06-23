import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'spi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }), 
        animate(
          '300ms ease-in',
          style({ opacity: 1, transform: 'translateY(0%)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 0, transform: 'translateX(0)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class RegisterComponent {
  public registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  public submit() {
    if (this.registerForm.valid) {
      // Code here
    }
  }

}
