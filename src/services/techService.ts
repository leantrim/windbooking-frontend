import http from "./httpService";

export function getTech() {
  return http.get("http://localhost:5000/api/technicians");
}
