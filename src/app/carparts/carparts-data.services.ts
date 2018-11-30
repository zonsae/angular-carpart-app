import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import {CarPart} from './car-part';

@Injectable(
  /*{providedIn: 'root',}*/
)
export class CarpartsDataService {

  constructor(private httpClient: HttpClient) {
    console.log('CarpartsDataService constructor called ..');
  }

  getCarParts(): Observable<any> {
    //return this.httpClient.get('assets/car-part.json', {responseType: 'json'});
    return this.httpClient.get('http://127.0.0.1:52274/data.json', {responseType: 'json'});
  }

  getCarPartsPromise(): Promise<CarPart[]> {
    return this.httpClient.get('assets/car-part.json')
      .toPromise()
      .then(res => res['data'])
      .catch(err => console.log('Error 발생', err));
  }
}
