const composeAllFunctions = (numbers) => {
  return (x) => {
    for (let i = x.length - 1; i >= 0; i--) {
      x = numbers[i](x);
    }
  };
};

const operations = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

console.log(composeAllFunctions(operations, 4));
