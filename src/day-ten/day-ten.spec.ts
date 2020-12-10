import { adapterPermutations, chainAdapters } from './day-ten';

test('day ten part one', () => {
    const data = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

    expect(chainAdapters(data)).toEqual(220);
});

test('day ten part two', () => {
    const dataSmall = `16
10
15
5
1
11
7
19
6
12
4`;

    const data = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

// expect(adapterPermutations(dataSmall)).toEqual(19208);
expect(adapterPermutations(data)).toEqual(19208);
});