import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {CarRacesComponent} from './car-races/car-races.component';

const ROUTERS: Routes = [
  {path: '', component: AboutComponent},
  {path: 'carpart', component: CarpartsComponent},
  {path: 'carraces', component: CarRacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
