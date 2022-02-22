import { Technician } from "../types/TechnicianUpdated";

const techArray: Technician[] = [
  {
    _id: "1",
    electricalCompetence: true,
    workPermitNorway: false,
    driverLicense: true,
    specificTools: true,
    vanWithWinterTire: false,
    available: true,
    location: "Sweden",
  },
  {
    _id: "2",
    electricalCompetence: true,
    workPermitNorway: false,
    driverLicense: false,
    specificTools: true,
    vanWithWinterTire: true,
    available: true,
    location: "Norway",
  },
  {
    _id: "3",
    electricalCompetence: true,
    workPermitNorway: false,
    driverLicense: false,
    specificTools: true,
    vanWithWinterTire: true,
    available: true,
    location: "Germany",
  },
  {
    _id: "4",
    electricalCompetence: true,
    workPermitNorway: false,
    driverLicense: true,
    specificTools: false,
    vanWithWinterTire: true,
    available: true,
    location: "Sweden",
  },
  {
    _id: "5",
    electricalCompetence: true,
    workPermitNorway: true,
    driverLicense: true,
    specificTools: false,
    vanWithWinterTire: false,
    available: true,
    location: "Norway",
  },
];

export default techArray;
