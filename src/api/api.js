import axios from "axios";

const apiUrl = "http://localhost:3000/testData";

export function getDataApi() {
  return axios.get(apiUrl);
}
export function sendEditedData(item) {
  return axios.put(apiUrl + `/${item.id}`, item);
}
