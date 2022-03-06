export interface Column {
  path: string;
  label: string;
}

export interface SortColumns {
  [key: string]: boolean;
  electricalCompetence: boolean;
  workPermitNorway: boolean;
  a: boolean;
  b: boolean;
  be: boolean;
  c: boolean;
  c1: boolean;
  specificTools: boolean;
  vanWithWinterTire: boolean;
  available: boolean;
}
