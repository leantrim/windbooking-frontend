export interface Windpark {
  id?: number;
  windparkName: string;
  address: {
    street: string;
    zipcode: number;
  };
  contactinformation: {
    name: string;
    email: string;
    mobile: string;
  };
}
