import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedOutComponent} from './logged-out/logged-out.component';
import { LogginInComponent } from './loggin-in/loggin-in.component';

const routes: Routes = [
  {path:'logged-out',component:LoggedOutComponent},
  {path:'logged-in',component:LogginInComponent},
  {path:'**',redirectTo:'logged-out'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
