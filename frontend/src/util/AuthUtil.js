export const setAuthToken = (token) => {
  localStorage.setItem("AuthToken", token);
};

export const getAuthToken = () => {
  return localStorage.getItem("AuthToken");
};

export const removeAuthToken = (token) => {
  localStorage.removeItem("AuthToken");
};
