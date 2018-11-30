import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
/*import { CarpartsComponent } from './carparts/carparts.component';
* import { CarRacesComponent } from './car-races/car-races.component';*/
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import {CarpartsModule} from './carparts/carparts.module';
import {CarReacesModule} from './car-races/car-reaces.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
    /*CarpartsComponent,
      CarRacesComponent, */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CarpartsModule,
    CarReacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
