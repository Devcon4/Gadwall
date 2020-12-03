
import { checkPolicy, checkPolicyStrict } from './day-two';

test('day-two test', () => {
    const data = `1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc
    `;

    expect(checkPolicy(data)).toEqual(2);
});

test('day-two test part two', () => {
    const data = `1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc
    `;

    expect(checkPolicyStrict(data)).toEqual(1);
});
