export interface CreateWindFarmData {
  address: {
    street: string;
    zipcode: string;
  };
  contactInformation: {
    name: string;
    email: string;
    mobile: string;
  };
  troubleshootingManual: string;
}

export interface UseForm {
  data: string;
  schema: string;
  doSubmit: string;
}
