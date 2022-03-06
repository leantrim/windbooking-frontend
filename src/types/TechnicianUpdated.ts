export interface Technician {
  [key: string]: boolean | string | DriverLicense | ElectricalCompetence;
  _id: string;
  name: string;
  company: string;
  location: string;
  electricalCompetence: ElectricalCompetence;
  workPermitNorway: boolean;
  driverLicense: DriverLicense;
  available: boolean;
  selected: boolean;
}

interface ElectricalCompetence {
  Electrical1: boolean;
  Electrical2: boolean;
  Electrical3: boolean;
  Electrical4: boolean;
}

interface DriverLicense {
  a: boolean;
  b: boolean;
  c: boolean;
  c1: boolean;
  be: boolean;
}
