import { validateXmas, validateXmasSet } from './day-nine';

test('day nine part one', () => {
  const data = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

  expect(validateXmas(5, data)).toEqual(127);
});
test('day nine part two', () => {
  const data = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

  expect(validateXmasSet(5, data)).toEqual(62);
});
