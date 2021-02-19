export const extractIdFromUrl = (url) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return url.match(idRegExp)[1];
};
