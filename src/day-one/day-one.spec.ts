import checkExpenses from './day-one';
import dayOneData from './day-one.data';
test('day-one test', () => {
    const data = `1721
    979
    366
    299
    675
    1456`;
    console.log(checkExpenses(dayOneData));
    expect(checkExpenses(data)).toEqual(514579);
});
