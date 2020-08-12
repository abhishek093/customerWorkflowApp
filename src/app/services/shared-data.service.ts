import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomerDetail, VehicleDetail } from './models/workflowTypes';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private _customerData$: BehaviorSubject<CustomerDetail[]> = new BehaviorSubject<CustomerDetail[]>([]);
  customerData$: Observable<CustomerDetail[]> = this._customerData$.asObservable();
  private _vehicleDetails$: BehaviorSubject<VehicleDetail[]> = new BehaviorSubject<VehicleDetail[]>([]);
  vehicleDetails$: Observable<VehicleDetail[]> = this._vehicleDetails$.asObservable();

  constructor() { }

  updateCustomerDetails(data: CustomerDetail) {
    this._customerData$.next([data]);
  }
  updateVehicleDetails(data: VehicleDetail) {
    this._vehicleDetails$.next([data]);
  }
}
