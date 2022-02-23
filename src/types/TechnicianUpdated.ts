export interface Technician {
  [key: string]: boolean | string;
  _id: string;
  electricalCompetence: boolean;
  workPermitNorway: boolean;
  driverLicense: boolean;
  specificTools: boolean;
  vanWithWinterTire: boolean;
  available: boolean;
  location: string;
}
