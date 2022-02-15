import jwtDecode from "jwt-decode";
import http from "./httpService";

const SECOND_URL = "auth";
const tokenKey = "x-auth-token";

http.setAuthHeader(getJwt());

function getMe() {
  return http.get(`http://localhost:5000/api/users/me`);
}

async function login(user: any) {
  const { data: jwt } = await http.post(
    `http://localhost:5000/api/${SECOND_URL}`,
    {
      email: user.email,
      password: user.password,
    }
  );
  localStorage.setItem(tokenKey, jwt);
}

function loginWithJwt(jwt: any) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
  try {
    const userToken = localStorage.getItem(tokenKey) || "";
    const user = jwtDecode(userToken);
    return user;
  } catch (error) {
    return null;
  }
}

function getJwt() {
  const key = localStorage.getItem(tokenKey);
  return key;
}

const exportedObject = {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
  getJwt,
  getMe,
};

export default exportedObject;
