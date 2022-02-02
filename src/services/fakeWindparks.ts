import { Windpark } from "../types/Windpark";

const windparks: Windpark[] = [
  {
    id: 1,
    windparkName: "WindOne",
    address: "Skane",
    contactinformation: "WindOneContact",
  },
  {
    id: 2,
    windparkName: "WindTwo",
    address: "Smaland",
    contactinformation: "WindTwoContact",
  },
  {
    id: 3,
    windparkName: "WindThree",
    address: "Halland",
    contactinformation: "WindThreeContact",
  },
  {
    id: 4,
    windparkName: "WindFour",
    address: "Vastra Gotaland",
    contactinformation: "WindFourContact",
  },
];

export function getWindparks() {
  return windparks;
}
