const chunk = function (arr, size) {
  const subArray = [];
  if (arr.length === 0 || size < 1) return [];

  for (let i = 0; i < arr.length; i += size) {
    const chuck = arr.slice(i, i + size);

    subArray.push(chuck);
  }
  return subArray;
};

console.log(chunk([1, 9, 6, 3, 2], 3));
