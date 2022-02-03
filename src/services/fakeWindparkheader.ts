import { Windparkheader } from "../types/Windparkheader";

const windparkheaders: Windparkheader[] = [
  {
    headerName: "Windpark Name",
  },
  {
    headerName: "Address",
  },

  {
    headerName: "Troubleshooting Manual",
  },

  {
    headerName: "Contactinformation",
  },
];

export function getWindparkheaders() {
  return windparkheaders;
}
