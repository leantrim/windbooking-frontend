import http from "./httpService";
import { apiEndpoint } from "../config.json";

const SECOND_URL = "users";

function register(user: any) {
  return http.post(`http://localhost:5000/api/${SECOND_URL}`, {
    email: user.email,
    name: user.name,
    password: user.password,
  });
}

export default {
  register,
};
