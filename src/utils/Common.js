export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  // localStorage.removeItem('user');
};

// set the token and user from the session storage
export const setUserSession = (token, fullName, role) => {
  localStorage.setItem("token", token);
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("role", role);
};
