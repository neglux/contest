export const timeout = (sec) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};
