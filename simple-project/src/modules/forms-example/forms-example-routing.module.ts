import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {path:'', component:TemplateDrivenFormsComponent},
  {path:'reactiveForms', component:ReactiveFormsComponent},
  {path:'templateForms', component:TemplateDrivenFormsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsExampleRoutingModule { }
