export interface Technician {
  [key: string]:
    | boolean
    | string
    | DriverLicense
    | ElectricalCompetence
    | SafetyCourses
    | Troubleshooting
    | ElevatorCourses;
  _id: string;
  name: string;
  company: string;
  location: string;
  safetyCourses: SafetyCourses;
  electricalCompetence: ElectricalCompetence;
  workPermitNorway: boolean;
  driverLicense: DriverLicense;
  troubleshooting: Troubleshooting;
  elevatorCourses: ElevatorCourses;
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
interface Troubleshooting {
  x: boolean;
  y: boolean;
  z: boolean;
}
interface ElevatorCourses {
  elevator1: boolean;
  elevator2: boolean;
  elevator3: boolean;
  elevator4: boolean;
}

interface DriverLicense {
  a: boolean;
  b: boolean;
  c: boolean;
  c1: boolean;
  be: boolean;
}
