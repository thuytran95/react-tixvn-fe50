export const hiddenName = (name, length) => {
  if (name.length > length) return name.substr(0, length) + "...";
  return name;
};

export const capitalizeWords = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const cutDateName = (string) => {
  const index = string.indexOf(" ", string.indexOf(" ") + 1);
  const newString = string.substring(0, index);

  return capitalizeWords(newString);
};

export const splitStringByHyphen = (string) => {
  const arr = string.replace(/'/gi, "").split("-");
  return arr;
};
