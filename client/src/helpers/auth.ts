import cookie from "js-cookie";

const prefix = "SE_";

// Set in Cookie
export const setCookie = (key: string, value: string) => {
  const prefixedKey = prefix + key;
  if (typeof window !== "undefined") {
    cookie.set(prefixedKey, value, {
      // 1 Day
      expires: 1,
    });
  }
};
// remove from cookie
export const removeCookie = (key: string) => {
  const prefixedKey = prefix + key;
  if (typeof window !== "undefined") {
    cookie.remove(prefixedKey, {
      expires: 1,
    });
  }
};

// Get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key: string) => {
  const prefixedKey = prefix + key;
  if (typeof window !== "undefined") {
    return cookie.get(prefixedKey);
  }
};

// Set in localstorage
export const setLocalStorage = (key: string, value: any) => {
  const prefixedKey = prefix + key;
  if (typeof window !== "undefined") {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }
};

// Remove from localstorage
export const removeLocalStorage = (key: string) => {
  const prefixedKey = prefix + key;
  if (typeof window !== "undefined") {
    localStorage.removeItem(prefixedKey);
  }
};

export const getLocalStorage = (key: string) => {
  const prefixedKey = prefix + key;
  const localStorageItem = localStorage.getItem(prefixedKey);
  const item = localStorageItem ? JSON.parse(localStorageItem) : null;
  return item;
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (token: string, user: any, next: Function) => {
  setCookie("token", token);
  setLocalStorage("user", user);
  setLocalStorage("token", token);
  next();
};

// Access user info from localstorage
export const isAuth = () => {
  if (typeof window !== "undefined") {
    const cookieChecked = getCookie("token");
    console.log(cookieChecked);
    if (cookieChecked) {
      if (localStorage.getItem(`${prefix}user`)) {
        const getUser = localStorage.getItem(`${prefix}user`);
        //@ts-ignore
        const user = JSON.parse(getUser);
        return user;
      } else {
        return false;
      }
    }
  }
};

export const signout = (next: any) => {
  removeCookie(`${prefix}token`);
  removeLocalStorage(`${prefix}user`);
  next();
};

export const updateUser = (user: any, next: any) => {
  if (typeof window !== "undefined") {
    setLocalStorage(`${prefix}user`, user);
  }
  next();
};
