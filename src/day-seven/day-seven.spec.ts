import { calcBagCount, calcGoldBagDepth, parseBagRule } from './day-seven';
import daySevenData from './day-seven.data';
test('day seven part one parser', () => {
  const emptyRule = `dotted black bags contains no other bags.`;
  const oneRule = `bright white bags contain 1 shiny gold bag.`;
  const multipleRule = `vibrant gray bags contain 3 muted gray bags, 1 dark fuchsia bag, 5 posh white bags, 5 posh tomato bags.`;

  const emptyRes = parseBagRule(emptyRule);
  expect(emptyRes.key).toEqual('dotted black');
  expect(emptyRes.rule[0]).toEqual('no other');

  const oneRes = parseBagRule(oneRule);
  expect(oneRes.key).toEqual('bright white');
  expect(oneRes.rule[0]).toEqual('shiny gold');

  const multipleRes = parseBagRule(multipleRule);
  expect(multipleRes.key).toEqual('vibrant gray');
  expect(multipleRes.rule[0]).toEqual('muted gray');
  expect(multipleRes.rule[1]).toEqual('dark fuchsia');
  expect(multipleRes.rule[2]).toEqual('posh white');
  expect(multipleRes.rule[3]).toEqual('posh tomato');
});

test('day seven part one calc', () => {
  const data = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;
  expect(calcGoldBagDepth(data)).toEqual(4);
  expect(calcBagCount(data)).toEqual(32);
});
test('day seven part two calc', () => {
  const data = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;
  expect(calcBagCount(data)).toEqual(126);
});
