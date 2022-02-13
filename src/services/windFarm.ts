import http from "./httpService";
import apiBaseUrl from "../config.json";
import { WindFarm } from "../types/WindFarm";
import { WindFarmHeader } from "../types/WindFarmHeader";

const apiEndpoint = `${apiBaseUrl}/windfarm`;

export function getWindFarms() {
  return http.get("http://localhost:5000/api/windfarm");
}

export function addWindFarm(windfarm: WindFarm) {
  return http.post(apiEndpoint, windfarm);
}

export function getWindFarmHeaders() {
  return http.get(apiEndpoint);
}

export function addWindFarmHeaders(windfarmheader: WindFarmHeader) {
  return http.post(apiEndpoint, windfarmheader);
}
