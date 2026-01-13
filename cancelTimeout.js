const cancellable = function (fn, args, t) {
  fn(...args);
  const cancelfn = setInterval(() => fn(...args), t);

  return function clearCancel() {
    clearInterval(cancelfn);
  };
};
