export interface CustomerDetail {
    customerName: string;
    address: string;
    cardNo: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    cardHolderName: string;
}

export interface VehicleDetail {
    cardMake: string;
    model: string;
    year: string;
    mileage: string;
}

export interface CustomerWorkflow {
    customerDetails: CustomerDetail[];
    vehicleDetails: VehicleDetail[];
}
