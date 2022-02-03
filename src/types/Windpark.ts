export interface Windpark {
  id?: number;
  windparkName: string;
  address: {
    street: string;
    zipcode: number;
  };
  troubleshootingManual: string;
  contactinformation: {
    name: string;
    email: string;
    mobile: string;
  };
}
