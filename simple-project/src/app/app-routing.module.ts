import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from 'src/common/guards/authenticate.guard';
import { LoginComponent } from 'src/common/login/login.component';
import { RegisterComponent } from 'src/common/register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'',redirectTo: 'login',pathMatch:'full'},
  {path:'dashboard',canActivate:[AuthenticateGuard], loadChildren:() => import('./../modules/home/home.module').then((module)=>module.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
