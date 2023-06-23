import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'spi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }), 
        animate(
          '750ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0%)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(-60%)' })
        ),
      ]),
    ]),
  ],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
