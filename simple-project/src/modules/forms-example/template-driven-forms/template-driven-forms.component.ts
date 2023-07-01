import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'spi-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {
  public form:any = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  public onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  public onReset(form: NgForm): void {
    form.reset();
  }
}
