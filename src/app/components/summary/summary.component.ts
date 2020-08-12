import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Subject,  } from 'rxjs';
import { CustomerDetail, VehicleDetail } from 'src/app/services/models/workflowTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  vehicleDetails: VehicleDetail;
  customerDetails: CustomerDetail;
  
  constructor(private _dataService: SharedDataService, private _router : Router) { }
  
  ngOnInit() {   
    this._dataService.vehicleDetails$.subscribe(data => {
      this.vehicleDetails = data[0];
      if (!this.vehicleDetails) {
        this._router.navigate(['/customer']);
      }
    });
    this._dataService.customerData$.subscribe(data => {
      this.customerDetails = data[0];
    });
  }
  
  redirectBack() {
    this._router.navigate(['/vehicle']);
  }

}
