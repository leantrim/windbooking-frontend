export interface Column {
  path: string;
  label: string;
}

export interface SortColumns {
  [key: string]: boolean;
  electricalCompetence: boolean;
  workPermitNorway: boolean;
  driverLicense: boolean;
  specificTools: boolean;
  vanWithWinterTire: boolean;
  available: boolean;
}
