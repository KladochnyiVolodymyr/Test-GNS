import axios from "axios";

export function getDataApi() {
  return axios.get("http://localhost:3000/testData");
}
