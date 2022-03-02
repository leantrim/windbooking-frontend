export interface Technician {
  [key: string]: boolean | string;
  _id: string;
  name: string;
  company: string;
  location: string;
  electricalCompetence: boolean;
  workPermitNorway: boolean;
  driverLicense: boolean;
  specificTools: boolean;
  vanWithWinterTire: boolean;
  available: boolean;
  selected: boolean;
}
