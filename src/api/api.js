import axios from "axios";
function handleResponse(res) {
  return res;
}
export function getDataApi() {
  return axios.get("http://localhost:3000/test").then(handleResponse);
}
