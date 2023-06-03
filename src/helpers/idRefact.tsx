export const idRefact = (id: number) => {
  return `#${id <= 9 ? "00" : id >= 10 && id <= 99 ? "0" : ""}${id}`;
};
