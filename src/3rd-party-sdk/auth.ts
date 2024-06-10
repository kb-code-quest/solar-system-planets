export const initAuth = async () =>
    await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("xman");
      }, 0);
    });
  