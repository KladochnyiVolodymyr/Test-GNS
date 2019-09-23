import data from "./db";

var dataArray = [...data];

export function getDataApi() {
  return new Promise(resolve => {
    resolve({ data: [...dataArray] });
  });
}
export function sendEditedData(updItem) {
  let updatedItem = { ...updItem };
  dataArray = dataArray.map(item => {
    if (item.id == updatedItem.id) {
      return updatedItem;
    } else {
      return item;
    }
  });
  return new Promise(resolve => {
    resolve({ data: updatedItem });
  });
}
