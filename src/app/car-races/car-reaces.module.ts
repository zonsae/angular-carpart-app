import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CarRacesComponent} from './car-races.component';
import {CarRacesDataService} from './car-races-data.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CarRacesComponent],
  exports: [CarRacesComponent],
  providers: [CarRacesDataService]
})
export class CarReacesModule { }
