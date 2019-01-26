const matched = x => ({
  on: () => matched(x),
  otherwise: () => x,
});
export const match = x => ({
  on: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
  otherwise: fn => fn(x),
});

export const multiFilter = (arr, filters) => {
  const filterKeys = Object.keys(filters);
  return arr.filter(eachObj =>
    filterKeys.every(eachKey => {
      if (!filters[eachKey].length) {
        return true; // passing an empty filter means that filter is ignored.
      }
      return eachKey === 'title' // title is a string not an array.
        ? eachObj[eachKey].toLowerCase().includes(filters[eachKey])
        : filters[eachKey].includes(eachObj[eachKey]);
    }),
  );
};
