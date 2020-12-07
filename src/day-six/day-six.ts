export const aggregateAnswers = (data: string) => {
  return data
    .trim()
    .split('\n\n')
    .map(
      (group) =>
        [...group.replace(/[\n]/g, '')].reduce((prev, curr) =>
          prev.includes(curr) ? prev : (prev += curr)
        ).length
    )
    .reduce((prev, curr) => (prev += curr));
};

export const aggregateAnswersAll = (data: string) => {
  return data
    .trim()
    .split('\n\n')
    .map((ans) =>
      Object.keys(
        ans
          .split('\n')
          .reduce(
            (prev, curr, _, arr) =>
              void [...curr]
                .filter((char) => arr.every((str) => str.includes(char)))
                .forEach((char) => (prev[char] = char)) || prev,
            {}
          )
      )
    )
    .reduce((prev, curr) => (prev += curr.length), 0);
};
