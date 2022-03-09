import { Technician } from "../types/TechnicianUpdated";

const techArray: Technician[] = [
  {
    _id: "1",
    name: "Albin",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: true,
      safety2: false,
      safety3: true,
      safety4: true,
      safety5: false,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: true,
      electrical3: true,
      electrical4: true,
    },
    workPermitNorway: false,
    driverLicense: {
      a: false,
      b: true,
      c1: true,
      c: true,
      be: false,
    },
    available: false,
    location: "Sweden",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: false,
      elevator3: true,
      elevator4: false,
    },
    troubleshooting: {
      x: true,
      y: false,
      z: true,
    },
  },
  {
    _id: "2",
    name: "Amanda",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: true,
      safety2: false,
      safety3: false,
      safety4: true,
      safety5: true,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: true,
      electrical3: true,
      electrical4: false,
    },
    workPermitNorway: false,
    driverLicense: {
      a: false,
      b: true,
      c1: true,
      c: true,
      be: true,
    },
    available: true,
    location: "Norway",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: false,
      elevator3: true,
      elevator4: false,
    },
    troubleshooting: {
      x: true,
      y: false,
      z: true,
    },
  },
  {
    _id: "3",
    name: "Leutrim",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: true,
      safety2: true,
      safety3: true,
      safety4: false,
      safety5: false,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: true,
      electrical3: false,
      electrical4: false,
    },
    workPermitNorway: false,
    driverLicense: {
      a: false,
      b: true,
      c1: true,
      c: false,
      be: true,
    },
    available: true,
    location: "Germany",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: false,
      elevator3: true,
      elevator4: false,
    },
    troubleshooting: {
      x: true,
      y: false,
      z: true,
    },
  },
  {
    _id: "4",
    name: "Catarina",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: false,
      safety2: true,
      safety3: true,
      safety4: true,
      safety5: true,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: false,
      electrical3: false,
      electrical4: false,
    },
    workPermitNorway: false,
    driverLicense: {
      a: false,
      b: true,
      c1: false,
      c: true,
      be: true,
    },
    available: true,
    location: "Sweden",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: false,
      elevator3: true,
      elevator4: false,
    },
    troubleshooting: {
      x: true,
      y: true,
      z: false,
    },
  },
  {
    _id: "5",
    name: "Aladin",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: false,
      safety2: true,
      safety3: true,
      safety4: false,
      safety5: false,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: true,
      electrical3: true,
      electrical4: true,
    },
    workPermitNorway: true,
    driverLicense: {
      a: false,
      b: true,
      c1: true,
      c: true,
      be: false,
    },
    available: true,
    location: "Norway",
    selected: false,
    elevatorCourses: {
      elevator1: false,
      elevator2: false,
      elevator3: true,
      elevator4: true,
    },
    troubleshooting: {
      x: true,
      y: false,
      z: true,
    },
  },
  {
    _id: "6",
    name: "Wolcker",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: true,
      safety2: true,
      safety3: true,
      safety4: true,
      safety5: true,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: false,
      electrical3: false,
      electrical4: false,
    },
    workPermitNorway: true,
    driverLicense: {
      a: false,
      b: true,
      c1: true,
      c: false,
      be: true,
    },
    available: true,
    location: "Germany",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: false,
      elevator3: true,
      elevator4: false,
    },
    troubleshooting: {
      x: false,
      y: false,
      z: true,
    },
  },
  {
    _id: "7",
    name: "Adam",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: false,
      safety2: false,
      safety3: false,
      safety4: false,
      safety5: false,
    },
    electricalCompetence: {
      electrical1: false,
      electrical2: false,
      electrical3: true,
      electrical4: false,
    },
    workPermitNorway: true,
    driverLicense: {
      a: false,
      b: false,
      c1: false,
      c: true,
      be: false,
    },
    available: true,
    location: "Denmark",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: false,
      elevator3: false,
      elevator4: true,
    },
    troubleshooting: {
      x: true,
      y: true,
      z: false,
    },
  },
  {
    _id: "8",
    name: "Hesam",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: false,
      safety2: true,
      safety3: true,
      safety4: true,
      safety5: false,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: true,
      electrical3: false,
      electrical4: true,
    },
    workPermitNorway: true,
    driverLicense: {
      a: true,
      b: true,
      c1: true,
      c: true,
      be: true,
    },
    available: false,
    location: "Norway",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: true,
      elevator3: false,
      elevator4: false,
    },
    troubleshooting: {
      x: true,
      y: true,
      z: false,
    },
  },
  {
    _id: "9",
    name: "Mohammed",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: true,
      safety2: false,
      safety3: false,
      safety4: true,
      safety5: true,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: false,
      electrical3: true,
      electrical4: false,
    },
    workPermitNorway: true,
    driverLicense: {
      a: true,
      b: false,
      c1: true,
      c: true,
      be: true,
    },
    available: true,
    location: "Sweden",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: false,
      elevator3: true,
      elevator4: false,
    },
    troubleshooting: {
      x: true,
      y: false,
      z: true,
    },
  },
  {
    _id: "10",
    name: "Ahmed",
    company: "IntesiveCode",
    safetyCourses: {
      safety1: true,
      safety2: false,
      safety3: false,
      safety4: false,
      safety5: true,
    },
    electricalCompetence: {
      electrical1: true,
      electrical2: false,
      electrical3: true,
      electrical4: false,
    },
    workPermitNorway: false,
    driverLicense: {
      a: false,
      b: true,
      c1: true,
      c: false,
      be: true,
    },
    available: false,
    location: "Poland",
    selected: false,
    elevatorCourses: {
      elevator1: true,
      elevator2: false,
      elevator3: true,
      elevator4: false,
    },
    troubleshooting: {
      x: true,
      y: false,
      z: true,
    },
  },
];

export default techArray;
