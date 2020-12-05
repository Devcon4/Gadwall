import { parsePass, parsePassMax, parsePassMissing } from './day-five';
import dayFiveData from './day-five.data';
test('day five part one parse', () => {
  const pass1 = `BFFFBBFRRR`;
  const pass2 = `FFFBBBFRRR`;
  const pass3 = `BBFFBBFRLL`;

  expect(parsePass(pass1)).toEqual(567);
  expect(parsePass(pass2)).toEqual(119);
  expect(parsePass(pass3)).toEqual(820);
});

test('day five part one max', () => {
  const data = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

  expect(parsePassMax(data)).toEqual(820);
});

test('day five part two', () => {
  const data = `FFFBBBFRLL
FBFFFBBRLL
BFFBFBFLLR
FFBBBFBRLR
BBFFFBBLRR
BFFFBBFLRL
FFFBBFFLRR
BBBFBBBLLL
BBFBFFFRLL
FFFBBFFRRL
BFBBFFFLRR
BBFFFFBRRR
BBFFFFFLLR
BBFBBBBLRL
FFBFBBBLRL
BBFFFFFRRR
FBFBFFBLLL
FFFFFBBRRL
BFFFFFBRRL
BBBFBFFRLL
FBFFBBFLLR
BBBFFBFRRR
BBFBFFFLRR
BBFFBBFLRR`;

  expect(parsePassMissing(data)).toEqual(31);
});
