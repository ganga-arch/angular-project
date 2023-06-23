import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
          '750ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0%)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
  ngOnInit(): void {
    
  }
}
