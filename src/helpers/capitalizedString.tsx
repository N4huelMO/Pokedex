export const capitalizedString = (name: string) => {
  const capitalizedString = name?.charAt(0).toUpperCase() + name?.slice(1);

  return capitalizedString;
};
