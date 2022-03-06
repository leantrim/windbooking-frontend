export interface Technician {
  [key: string]: boolean | string | DriverLicense;
  _id: string;
  name: string;
  company: string;
  location: string;
  electricalCompetence: boolean;
  workPermitNorway: boolean;
  driverLicense: DriverLicense;
  available: boolean;
  selected: boolean;
}

interface DriverLicense {
  a: boolean;
  b: boolean;
  c: boolean;
  c1: boolean;
  be: boolean;
}
