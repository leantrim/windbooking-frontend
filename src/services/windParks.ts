import http from "../services/httpService";
import apiBaseUrl from "../config.json";
import { Windpark } from "../types/Windpark";
import { Windparkheader } from "../types/Windparkheader";
import { NewWindfarmData } from "../types/NewWindfarmData";

const apiEndpoint = `${apiBaseUrl}/windparks`;

export function getWindparks() {
  return http.get("http://localhost:5000/api/windparks");
}

export function deleteWindpark(_id: Windpark) {
  return http.delete(apiEndpoint + "/" + _id);
}

export function addWindparks(windpark: Windpark) {
  return http.post(apiEndpoint, windpark);
}

export function getWindparkheaders() {
  return http.get(apiEndpoint);
}

export function addWindparkheaders(windparkheader: Windparkheader) {
  return http.post(apiEndpoint, windparkheader);
}

export function saveWindfarm(windpark: Windpark) {
  if (windpark._id) {
    const body = { ...windpark };
    delete body._id;
    return http.put(apiEndpoint + "/" + windpark._id, body);
  } else {
    delete windpark._id;
    return http.post(apiEndpoint, windpark);
  }
}
