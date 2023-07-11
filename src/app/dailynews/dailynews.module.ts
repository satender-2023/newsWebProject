import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailynewsRoutingModule } from './dailynews-routing.module';
import { UpdatesComponent } from './updates/updates.component';
import { RelatedNewsComponent } from '../related-news/related-news.component';
// import { CurrentDateService } from '../current-date.service';


@NgModule({
  declarations: [
    UpdatesComponent,
    RelatedNewsComponent
  ],
  imports: [
    CommonModule,
    DailynewsRoutingModule,
    //CurrentDateService
  ]
})
export class DailynewsModule { }
