import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*아래와 같이 template 을 써서 직접 html 을 넣을 수 있다.
    template: `<h1>Angular App root component</h1>`,
  */
  styleUrls: ['./app.component.css']
})
/*
export class AppComponent {
  title = 'carpart-app';
}
*/
export class AppComponent {
  title = 'Ultra Racing';

  carPart = {
    'id': 1,
    'name': 'Supper Tires',
    'description': 'These tires are the very bet',
    'inStock': 5
  };

  carParts = [
    {
      'id': 1,
      'name': 'Super Tires',
      'description': 'These tires are the very best',
      'price': 4.99,
      'inStock': 5
    },
    {
      'id': 2,
      'name': 'Reinforced Shocks',
      'description': 'Shocks made from kryptonite',
      'price': 9.99,
      'inStock': 4
    },
    {
      'id': 3,
      'name': 'Padded Seats',
      'description': 'Super soft seats for a smooth ride',
      'price': 24.99,
      'inStock': 0
    }
  ];
}
