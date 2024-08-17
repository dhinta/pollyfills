Array.prototype.customMap = function (fn) {
  const result = [];
  for (const item of this) {
    result.push(fn(item));
  }

  return result;
};

Array.prototype.customFilter = function (fn) {
  const result = [];
  for (const item of this) {
    if (fn(item)) {
      result.push(item);
    }
  }

  return result;
};

Array.prototype.customFlatMap = function (fn) {
  let result = [];
  for (const item of this) {
    result = [...result, ...item.customMap(fn)];
  }

  return result;
};

console.log(
  [[2], [3, 9], [], [4, 5], [7, 10]].customFlatMap((item) => item * 2)
);
