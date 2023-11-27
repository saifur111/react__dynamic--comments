export const localStorageData = () => {
  let data = localStorage.getItem("inputs");
  return JSON.parse(data) || [];
};
