import {checkExpensesTwo, checkExpensesThree} from './day-one';
import dayOneData from './day-one.data';
test('day-one test', () => {
    const data = `1721
    979
    366
    299
    675
    1456`;
    expect(checkExpensesTwo(data)).toEqual(514579);
});

test('day-one part-2 test', () => {
    const data = `1721
    979
    366
    299
    675
    1456`;

    expect(checkExpensesThree(data)).toEqual(241861950);
});