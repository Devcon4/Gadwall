export type BagRule = { key: string; rule: string[]; ruleCount: number[] };
export const parseBagRule = (data: string): BagRule => {
  const [key, ruleStr] = data.replace(' bags', '').split(/ contains? /g);
  const rule = ruleStr
    .split(',')
    .map((s) => s.replace(/([\d]+)|([.])+|(bags?)+/g, '').trim());
  const ruleCount = ruleStr.split(',').map((s) => +s.replace(/[\D]/g, ''));
  return { key, rule, ruleCount };
};

export const calcGoldBagDepth = (data: string) => {
  const lookup = data
    .trim()
    .split('\n')
    .map<BagRule>(parseBagRule)
    .reduce<{ [k: string]: BagRule }>(
      (prev, curr) => ({ ...prev, [curr.key]: curr }),
      {}
    );

  const recurBags = (bag: BagRule): string[] => {
    const res = bag.rule.includes('no other')
      ? []
      : [
          ...new Set([
            bag.key,
            ...Object.values(lookup)
              .filter((b) => b.rule.includes(bag.key))
              .flatMap((v) => recurBags(v)),
          ]),
        ];
    return res;
  };

  return recurBags(lookup['shiny gold']).filter((b) => b !== 'shiny gold')
    .length;
};

export const calcBagCount = (data: string) => {
  const lookup = data
    .trim()
    .split('\n')
    .map<BagRule>(parseBagRule)
    .reduce<{ [k: string]: BagRule }>(
      (prev, curr) => ({ ...prev, [curr.key]: curr }),
      {}
    );

  const recurCount = (bag: BagRule): number => {
    if (bag.rule.includes('no other')) {
      return 0;
    }
    return (
      bag.ruleCount.reduce((prev, curr) => (prev += curr)) +
      bag.rule.reduce<number>(
        (prev, curr, i) =>
          (prev += bag.ruleCount[i] * recurCount(lookup[curr])),
        0
      )
    );
  };

  return recurCount(lookup['shiny gold']);
};
