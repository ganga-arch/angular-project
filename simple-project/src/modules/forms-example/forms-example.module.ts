import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExampleRoutingModule } from './forms-example-routing.module';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchPasswordDirective } from 'src/common/directives/password-match.directive';
import { FormsComponent } from './forms/forms.component';
import { SharedModule } from 'src/common/components/shared/shared.module';
import { ActivateChildGuardService } from 'src/common/guards/can-activate-child.guard';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    MatchPasswordDirective,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    FormsExampleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatExpansionModule
  ],
  providers: [
    ActivateChildGuardService
  ]
})
export class FormsExampleModule { }
