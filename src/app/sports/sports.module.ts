import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';

import { UpdatesComponent } from './updates/updates.component';


@NgModule({
  declarations: [
    
    UpdatesComponent
  ],
  imports: [
    CommonModule,
    SportsRoutingModule
  ]
})
export class SportsModule { }
