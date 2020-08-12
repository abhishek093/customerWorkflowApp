import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '../../../services/shared-data.service';
import { VehicleDetail } from '../../../services/models/workflowTypes';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  vehicleForm: FormGroup;
  carMakeList: string[] = ['Audi', 'Volvo'];
  carModel: string[] = [];
  carYear: string = "";
  carMileage: string = "";
  selectedCar: string[] = [];
  carDetails = {
    "Audi" : [
      {
        "modelName" : "Audi A6",
        "year" : "2019",
        "mileage": "14 km/l"
      },
      {
        "modelName" : "Audi Q8",
        "year" : "2020",
        "mileage": "9 km/l"
      }
    ],
    "Volvo" : [
      {
        "modelName" : "Volvo XC90",
        "year" : "2020",
        "mileage": "15 km/l"
      },
      {
        "modelName" : "Volvo XC60",
        "year" : "2018",
        "mileage": "18 km/l"
      }
    ]
  }
  constructor(private fb: FormBuilder, private _router : Router, private _dataService: SharedDataService) {
    this.vehicleForm = fb.group({
      'carMake': [null, Validators.required],
      'model': [null, Validators.required],
      'year': [{value: '', disabled: true}],
      'mileage': [{value: '', disabled: true}]
    });
  }

  ngOnInit() {
  }

  onCarMakeChange(event) {
    this.carModel = [];
    this.carYear = "";
    this.carMileage = "";
    const carMakeName = event.value;
    if (carMakeName) {
      this.selectedCar = this.carDetails[carMakeName];
      if (this.selectedCar) {
        this.carModel = this.carDetails[carMakeName].map(car => car.modelName);
      }
    }
    
  }
  onCarModelChange(event) {
    const model = event.value;
    if (model) {
      if (this.selectedCar) {
        const modelDetails = this.selectedCar.filter(item => item['modelName'] === model);
        if (modelDetails) {
          this.carYear = modelDetails[0]['year'];
          this.carMileage = modelDetails[0]['mileage'];
          this.vehicleForm.patchValue({
            year: this.carYear,
            mileage: this.carMileage
          });    
        }
      }
    }
  }
  redirectBack() {
    this._router.navigate(['/customer']);
  }
  onFormSubmit(formData: VehicleDetail) {
    this._dataService.updateVehicleDetails(formData);
    this._router.navigate(['/summary']);
  }
}