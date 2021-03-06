import http from "./httpService";
import config from "../config.json";
import { CreateWindFarmData } from "../types/CreateWindfarmData";

const apiEndpoint = `${config.apiBaseUrl}/windfarms`;

export function getWindFarms() {
  return http.get("http://localhost:5000/api/windfarms");
}

export function addWindFarm(windfarm: CreateWindFarmData) {
  return http.post(apiEndpoint, windfarm);
}

export function deleteWindFarm(id: number) {
  return http.delete(apiEndpoint + "/" + id);
}
