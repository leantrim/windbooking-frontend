import jwtDecode from "jwt-decode";
<<<<<<< HEAD

const tokenKey = "token";

function getCurrentUser() {
  //fake Login
  localStorage.setItem(
    tokenKey,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZjMTRlM2M1MmU5NGVhOTMwNjViNGYiLCJuYW1lIjoiQWxiaW4iLCJpYXQiOjE2NDM5MTA0MjZ9.z3mw4Sx3mfN6u99riY2zkQLDFds0NuYDmGuJLMYzdoM"
  );

  try {
    const token: any = localStorage.getItem(tokenKey);
    const user = jwtDecode(token);
=======
import http from "./httpService";

const SECOND_URL = "auth";
const tokenKey = "token";

http.setAuthHeader(getJwt());

async function login(user: any) {
  const { data: jwt } = await http.post(
    `http://localhost:5000/api/${SECOND_URL}`,
    {
      email: user.username,
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
>>>>>>> origin/dev
    return user;
  } catch (error) {
    return null;
  }
}
<<<<<<< HEAD
export default {
  getCurrentUser,
};
=======

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
};

export default exportedObject;
>>>>>>> origin/dev
