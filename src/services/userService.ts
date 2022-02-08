import http from "./httpService";

const SECOND_URL = "users";

function register(user: any) {
  return http.post(`http://localhost:5000/api/${SECOND_URL}`, {
    email: user.email,
    name: user.name,
    password: user.password,
    userType: user.userType,
  });
}

export async function getMe() {
  return await http.get(`http://localhost:5000/api/users/me`);
}

const exportObject = {
  register,
  getMe,
};

export default exportObject;
