export const randomInt = (min = 0, max = 1) => {
  return Math.floor(min + Math.random() * (max - min));
};
