export const validateXmas = (preambleLength: number, data: string) => {
  return data
    .split('\n')
    .map((v) => +v)
    .reduce((prev, curr, i, arr) => {
      if (i < preambleLength) return prev;

      return !arr
        .slice(i - preambleLength, i)
        .reduce(
          (p, c, _, arr) => arr.map((v) => c + v).includes(curr) || p,
          false
        )
        ? curr
        : prev;
    });
};

export const validateXmasSet = (preambleLength: number, data: string) => {
  const target = validateXmas(preambleLength, data);

  return data
    .split('\n')
    .map((v) => +v)
    .reduce((prev, _, index, arr) => {
      if (prev) return prev;
      let set = [];
      for (let [i, v] of arr.slice(index).entries()) {
        set = [...set, v];
        const count = set.reduce((p, c) => (p += c), 0);
        if (count === target) {
          const sorted = set.sort((a, b) => (a > b ? 1 : -1));
          const [min, max] = [sorted.shift(), sorted.pop()];
          return (prev = min + max);
        }
        if (count > target) break;
      }
    }, 0);
};
