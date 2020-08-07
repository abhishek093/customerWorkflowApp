import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customerForm: FormGroup;
  customerName: string = '';
  address: string = '';
  cardNo: number = 0;
  expiryMonth: string = '';
  expiryYear: string = '';
  cvv: number = 123;
  cardHolderName: string = '';

  yearsList = [20, 21, 22, 23, 24, 25];
  monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  viewId = 0;

  constructor(private fb: FormBuilder) {
    this.customerForm = fb.group({
      'customerName': [null, Validators.required],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'cardNo': [null, Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
      'expiryMonth': [null, Validators.required],
      'expiryYear': [null, Validators.required],
      'cvv': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3)])],
      'cardHolderName': [null, Validators.required]
    });
  }

  ngOnInit() { }

  onFormSubmit(formData: NgForm) {
    console.log(formData);
  }

}
