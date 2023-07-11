import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentRoutingModule } from './entertainment-routing.module';
import { UpdatesComponent } from './updates/updates.component';


@NgModule({
  declarations: [
    UpdatesComponent,
  ],
  imports: [
    CommonModule,
    EntertainmentRoutingModule
  ],
})
export class EntertainmentModule { }
