import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormControl,  FormGroup, Validators, FormBuilder} from '@angular/forms';
import {CarpartsDataService} from './carparts-data.services';
import {CarPart} from './car-part';

@Component({
  selector: 'app-car-part-reactive-form',
  templateUrl: './car-part-reactive-form.component.html'
})
export class CarPartReactiveFormComponent implements OnInit {

  carPartForm: FormGroup;

  constructor(private carpartDataService: CarpartsDataService,
              private location: Location) { }

  ngOnInit() {
    this.carPartForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.compose([Validators.required,
        Validators.min(500), Validators.max(5000)])),
      quantity: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[0-9]') ]))
    });

  }

  onSubmit() {
    alert(this.carPartForm.controls['id'].value + ' ' + this.carPartForm.controls['name'].value);

    let carPart: CarPart;
    carPart.id = this.carPartForm.controls['id'].value;
    carPart.name = this.carPartForm.controls['name'].value;
    carPart.description = this.carPartForm.controls['description'].value;
    carPart.price = this.carPartForm.controls['price'].value;
    carPart.quantity = this.carPartForm.controls['quantity'].value;

    this.carpartDataService.addCarPart(carPart).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
