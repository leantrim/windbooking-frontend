import { Windparkheader } from "../types/Windparkheader";

const windparkheaders: Windparkheader[] = [
  {
    headerName: "Windpark Name",
  },
  {
    headerName: "Address",
  },
  {
    headerName: "Contactinformation",
  },
];

export function getWindparkheaders() {
  return windparkheaders;
}
