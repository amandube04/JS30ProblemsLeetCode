const cancellable = function (fn, args, t) {
  const timeoutID = setTimeout(() => fn(...args), t);

  return function cancelFn() {
    clearTimeout(timeoutID);
  };
};
