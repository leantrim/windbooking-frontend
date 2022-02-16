export interface NewWindfarmData {
  _id?: number;
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

export interface UseForm {
  data: string;
  schema: string;
  doSubmit: string;
}
