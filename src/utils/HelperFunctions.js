export const extractFirstLetter = (name) => {
  let nameList = name.split('');
  return nameList[0];
};

export const randomColor = () => {
  let rand = Math.floor(Math.random() * 16777215).toString(16);
  return rand;
};

export const createLog = (email, courses) => {
  // window.localStorage
  // Syntax for SAVING data to localStorage:
  // localStorage.setItem("key", "value");
  // Syntax for READING data from localStorage:
  // var lastname = localStorage.getItem("key");
  // Syntax for REMOVING data from localStorage:
  // localStorage.removeItem("key");

  localStorage.setItem('email', email);
};

export const getLoginFile = () => {
  const res = localStorage.getItem('email');
  if (Boolean(res) === true) return true;
};

export const deleteLogFile = () => {
  localStorage.removeItem('email');
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
