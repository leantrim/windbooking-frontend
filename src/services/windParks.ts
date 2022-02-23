import http from "../services/httpService";
import config from "../config.json";
import { Windparkheader } from "../types/Windparkheader";
import { CreateWindfarmData } from "../types/CreateWindfarmData";

const apiEndpoint = `${config.apiBaseUrl}/windparks`;

export function getWindparks() {
  return http.get("http://localhost:5000/api/windparks");
}

export function deleteWindpark(_id: number) {
  return http.delete(apiEndpoint + "/" + _id);
}

export function addWindparks(windpark: CreateWindfarmData) {
  return http.post(apiEndpoint, windpark);
}

export function getWindparkheaders() {
  return http.get(apiEndpoint);
}

export function addWindparkheaders(windparkheader: Windparkheader) {
  return http.post(apiEndpoint, windparkheader);
}

// export function saveWindfarm(windpark: CreateWindfarmData) {
//   if (windpark) {
//     const body = { ...windpark };
//     return http.put(apiEndpoint + "/" + windpark, body);
//   } else {
//     return http.post(apiEndpoint, windpark);
//   }
// }
