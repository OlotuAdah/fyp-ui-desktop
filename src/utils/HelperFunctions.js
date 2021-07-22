export const extractFirstLetter = (name) => {
  let nameList = name.split('');
  return nameList[0];
};

export const randomColor = () => {
  let rand = Math.floor(Math.random() * 16777215).toString(16);
  return rand;
};
