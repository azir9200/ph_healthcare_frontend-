export const setToLocalStorage = (key: string, value: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const getFromLocalStorage = (key: string): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// export const setToLocalStorage = (key: string, token: string) => {
//   if (!key || typeof window === "undefined") {
//     return "";
//   }
//   return localStorage.setItem(key, token);
// };

// export const getFromLocalStorage = (key: string) => {
//   if (!key || typeof window === "undefined") {
//     return "";
//   }
//   return localStorage.getItem(key);
// };

// export const removeFromLocalStorage = (key: string) => {
//   if (!key || typeof window === "undefined") {
//     return "";
//   }
//   return localStorage.removeItem(key);
// };
