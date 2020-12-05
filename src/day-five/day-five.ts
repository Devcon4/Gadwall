export const parsePass = (data: string) => {
  data = data.replace(/[BR]/g, '1').replace(/[FL]/g, '0');
  const row = parseInt(data.substring(0, data.length - 3), 2);
  const column = parseInt(data.substring(data.length - 3), 2);
  return row * 8 + column;
};

export const parsePassMax = (data: string) => {
  return data
    .trim()
    .split('\n')
    .map(parsePass)
    .reduce((prev, curr) => (curr > prev ? curr : prev));
};

export const parsePassMissing = (data: string) => {
  const mapped = data
    .trim()
    .split('\n')
    .map(parsePass)
    .sort((a, b) => a - b);

  return [...Array(mapped[mapped.length - 1]).keys()]
    .filter((v) => v > mapped[0] && !mapped.includes(v))
    .shift();
};
