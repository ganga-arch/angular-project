import { FormsExampleModule } from './../forms-example/forms-example.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'', component: DashboardComponent},
  {path:'forms' , loadChildren:() => import('../forms-example/forms-example.module').then((module)=>module.FormsExampleModule )}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
