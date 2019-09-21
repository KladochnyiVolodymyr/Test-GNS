import axios from "axios";

export function getDataApi() {
  return axios.get("http://localhost:3000/testData");
}
export function sendEditedData(item) {
  return axios.put(`http://localhost:3000/testData/${item.id}`, item);
}
