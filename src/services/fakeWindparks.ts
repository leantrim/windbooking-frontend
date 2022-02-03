import { Windpark } from "../types/Windpark";

const windparks: Windpark[] = [
  {
    id: 1,
    windparkName: "WindOne",
    address: {
      street: "Testvägen 1",
      zipcode: 12345,
    },
    troubleshootingManual: "www.google.se",
    contactinformation: {
      name: "WindOneContact",
      email: "WindOneContact@gmail.com",
      mobile: "+46123456789",
    },
  },
  {
    id: 2,
    windparkName: "WindTwo",
    address: {
      street: "Testvägen 2",
      zipcode: 23456,
    },
    troubleshootingManual: "www.google.se",
    contactinformation: {
      name: "WindTwoContact",
      email: "WindTwoContact@gmail.com",
      mobile: "+46234567890",
    },
  },
  {
    id: 3,
    windparkName: "WindThree",
    address: {
      street: "Testvägen 3",
      zipcode: 34567,
    },
    troubleshootingManual: "www.google.se",
    contactinformation: {
      name: "WindThreeContact",
      email: "WindThreeContact@gmail.com",
      mobile: "+46345678901",
    },
  },
  {
    id: 4,
    windparkName: "WindFour",
    address: {
      street: "Testvägen 4",
      zipcode: 45678,
    },
    troubleshootingManual: "www.google.se",
    contactinformation: {
      name: "WindFourContact",
      email: "WindFourContact@gmail.com",
      mobile: "+46456789012",
    },
  },
];

export function getWindparks() {
  return windparks;
}
