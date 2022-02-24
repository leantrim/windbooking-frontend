export interface WindFarm {
  _id: number;
  address: {
    street: string;
    zipcode: string;
  };
  troubleshootingManual: string;
  contactInformation: {
    name: string;
    email: string;
    mobile: string;
  };
}
