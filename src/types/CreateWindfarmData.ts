export interface CreateWindFarmData {
  address: {
    name: string;
    street: string;
    zipcode: string;
    city: string;
    county: string;
    country: string;
  };
  troubleshootingManual: string;
  owner: {
    company: string;
  };
  windFarmDetails: {
    hubHeight: string;
    elevatorType: string;
    commissioningDate: string;
    safetyEquipment: string;
    numberOfWindTurbines: string;
  };
}

export interface UseForm {
  data: string;
  schema: string;
  doSubmit: string;
}
