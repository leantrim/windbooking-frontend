export interface Technician {
  [key: string]:
    | boolean
    | string
    | DriverLicense
    | ElectricalCompetence
    | SafetyCourses;
  _id: string;
  name: string;
  company: string;
  location: string;
  safetyCourses: SafetyCourses;
  electricalCompetence: ElectricalCompetence;
  workPermitNorway: boolean;
  driverLicense: DriverLicense;
  available: boolean;
  selected: boolean;
}

interface SafetyCourses {
  safety1: boolean;
  safety2: boolean;
  safety3: boolean;
  safety4: boolean;
  safety5: boolean;
}

interface ElectricalCompetence {
  electrical1: boolean;
  electrical2: boolean;
  electrical3: boolean;
  electrical4: boolean;
}

interface DriverLicense {
  a: boolean;
  b: boolean;
  c: boolean;
  c1: boolean;
  be: boolean;
}
