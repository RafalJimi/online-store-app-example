const prefix = "SE_";

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
export const authenticate = (token: string) => {
  setLocalStorage(`${prefix}token`, token);
};

export const signOut = () => {
  removeLocalStorage(`${prefix}token`);
};
