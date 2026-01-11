const oneCallFunction = (fn) => {
  let called = false;
  return (...args) => {
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
};

const addOnce = oneCallFunction((a, b, c) => a + b + c);
console.log(addOnce(1, 2, 3));
