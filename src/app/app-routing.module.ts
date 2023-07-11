import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: "dailynews", loadChildren: () => import
      ("./dailynews/dailynews.module")
      .then(mod => mod.DailynewsModule)
  },

  {
    path: "entertainment", loadChildren: () => import
      ("./entertainment/entertainment.module")
      .then(mod => mod.EntertainmentModule)
  },

  {
    path: "sports", loadChildren: () => import
      ("./sports/sports.module")
      .then(mod => mod.SportsModule)
  },

  {
    path: "technology", loadChildren: () => import
      ("./technology/technology.module")
      .then(mod => mod.TechnologyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
