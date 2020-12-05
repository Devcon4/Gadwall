const ValidKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const ValidColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

export const validators: {
  [k: string]: (k: string, v: { [k: string]: string }) => boolean;
} = {
  byr: (k, v) => +v[k] >= 1920 && +v[k] <= 2002,
  iyr: (k, v) => +v[k] >= 2010 && +v[k] <= 2020,
  eyr: (k, v) => +v[k] >= 2020 && +v[k] <= 2030,
  hgt: (k, v) => {
    if (!v[k]) return false;
    const c = v[k].substring(v[k].length - 2);
    const n = +v[k].substring(0, v[k].length - 2);
    if (c === 'cm') return n >= 150 && n <= 193;
    if (c === 'in') return n >= 59 && n <= 76;
    return false;
  },
  hcl: (k, v) => v[k] && !!v[k].match(/#[0-9a-f]{6}/g),
  ecl: (k, v) => ValidColors.some((c) => v[k] === c),
  pid: (k, v) => +v[k] && +v[k].length === 9,
};

export const parsePassports = (data: string) => {
  return data
    .split('\n\n')
    .filter((v) => v)
    .map((v) =>
      JSON.parse(
        `{${v
          .replace(/[\w#]+/g, '"$&"')
          .trimEnd()
          .replace(/[\n\s]/g, ',')}}`
      )
    )
    .filter((v) => ValidKeys.every((k) => v[k])).length;
};
export const parsePassportsStrict = (data: string) => {
  return data
    .split('\n\n')
    .filter((v) => v)
    .map((v) =>
      JSON.parse(
        `{${v
          .replace(/[\w#]+/g, '"$&"')
          .trimEnd()
          .replace(/[\n\s]/g, ',')}}`
      )
    )
    .filter((v) => ValidKeys.every((k) => validators[k](k, v))).length;
};
