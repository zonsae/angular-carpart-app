import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {CarRacesComponent} from './car-races/car-races.component';
import {CarPartTemplatedrivenFormComponent} from './carparts/car-part-templatedriven-form.component';
import {CarPartReactiveFormComponent} from './carparts/car-part-reactive-form.component';

const ROUTERS: Routes = [
  {path: '', component: AboutComponent},
  {path: 'carpart', component: CarpartsComponent},
  {path: 'carraces', component: CarRacesComponent},
  {path: 'carpartTemplateForm', component: CarPartTemplatedrivenFormComponent},
  {path: 'carpartReactiveForm', component: CarPartReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
