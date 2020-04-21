import Cookies from "js-cookie";
export const TOKEN_KEY = 'token'
export const USER_KEY = 'USER_MESSAGE'
export const USER= 'USER_List'
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token);
};

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) {
    return token;
  }
  return false;
};

export const removeToken = () => {
  return Cookies.remove(TOKEN_KEY);
};

export const setUserInfo = data => {
  localStorage.setItem(USER_KEY, JSON.stringify(data || ""));
};
export const setUser = data => {
  localStorage.setItem(USER, JSON.stringify(data || ""));
};
