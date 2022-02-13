import http from "../services/httpService";
import apiBaseUrl from "../config.json";
import { Windpark } from "../types/Windpark";
import { Windparkheader } from "../types/Windparkheader";

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
