import axios from "axios";

function setAuthHeader(jwt: any) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

const exportedObject = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setAuthHeader,
};

export default exportedObject;
