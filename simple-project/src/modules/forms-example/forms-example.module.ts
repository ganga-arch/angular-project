import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExampleRoutingModule } from './forms-example-routing.module';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchPasswordDirective } from 'src/common/directives/password-match.directive';


@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    MatchPasswordDirective
  ],
  imports: [
    CommonModule,
    FormsExampleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsExampleModule { }
