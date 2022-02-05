import jwtDecode from "jwt-decode";

const tokenKey = "token";

function getCurrentUser() {
  localStorage.setItem(
    tokenKey,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZjMTRlM2M1MmU5NGVhOTMwNjViNGYiLCJuYW1lIjoiQWxiaW4iLCJpYXQiOjE2NDM5MTA0MjZ9.z3mw4Sx3mfN6u99riY2zkQLDFds0NuYDmGuJLMYzdoM"
  );
  try {
    const token: any = localStorage.getItem(tokenKey);
    const user = jwtDecode(token);
    return user;
  } catch (error) {
    return null;
  }
}
export default {
  getCurrentUser,
};
