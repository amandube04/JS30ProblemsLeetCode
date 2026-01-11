const addTwoPromises = async function (promise1, promise2) {
  return new Promise((resolve, reject) => {
    // Promise.all expects an array of promises. It waits for all of them and returns an array of results in the same order.

    Promise.all([promise1, promise2])
      .then(([a, b]) => resolve(a + b))
      .catch(reject);
  });
};
