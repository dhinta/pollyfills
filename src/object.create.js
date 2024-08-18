export const objectCreate = (obj) => {
  function F() {}
  F.prototype = obj;
  return new F();
};
