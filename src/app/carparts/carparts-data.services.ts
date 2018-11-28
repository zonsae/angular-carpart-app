import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarpartsDataService {

  constructor(private httpClient: HttpClient) {
    console.log('CarpartsDataService constructor called ..');
  }

  getCarParts(): Observable<any> {
    return this.httpClient.get('assets/car-part.json', {responseType: 'json'});
  }
}
