export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorage = (key, response) => {
  return localStorage.setItem(key, JSON.stringify(response));
};
