import cookie from "js-cookie";

// Set in Cookie
export const setCookie = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      // 1 Day
      expires: 1,
    });
  }
};
// remove from cookie
export const removeCookie = (key: string) => {
  if (typeof window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key: string) => {
  if (typeof window !== "undefined") {
    return cookie.get(key);
  }
};

// Set in localstorage
export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Remove from localstorage
export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
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
      if (localStorage.getItem("user")) {
        const getUser = localStorage.getItem("user");
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
  removeCookie("token");
  removeLocalStorage("user");
  next();
};

export const updateUser = (user: any, next: any) => {
  if (typeof window !== "undefined") {
    setLocalStorage("user", user);
  }
  next();
};
