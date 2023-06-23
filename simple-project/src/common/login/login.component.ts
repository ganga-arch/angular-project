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
          '300ms ease-in',
          style({ opacity: 1, transform: 'translateY(0%)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 0, transform: 'translateX(0)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(-60%)' })
        ),
      ]),
    ]),
  ],
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public submit(): void {
    if (this.loginForm.valid) {
      localStorage.setItem(
        'userDetails',
        JSON.stringify({
          name: this.loginForm.get('username')?.value,
          password: this.loginForm.get('password')?.value,
        })
      );
    }
  }
}
