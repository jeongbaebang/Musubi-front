export const storage = (type: "setItem" | "getItem" | "removeItem") => {
  return function (key: string, value?: string) {
    try {
      return localStorage[type](key, JSON.stringify(value));
    } catch (error) {
      throw new Error("localStorage Error");
    }
  };
};
