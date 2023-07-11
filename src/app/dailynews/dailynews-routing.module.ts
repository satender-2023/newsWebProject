import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatesComponent } from './updates/updates.component';

const routes: Routes = [
  {path:'updates',component:UpdatesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailynewsRoutingModule { }
