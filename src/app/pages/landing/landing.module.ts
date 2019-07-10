import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { LogginInComponent } from './loggin-in/loggin-in.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LoggedOutComponent,LogginInComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
