import { aggregateAnswers, aggregateAnswersAll } from './day-six';
test('day six part one', () => {
  const data = `abc

a
b
c

ab
ac

a
a
a
a

b
`;

  expect(aggregateAnswers(data)).toEqual(11);
});

test('day six part two', () => {
  const data = `abc

a
b
c

ab
ac

a
a
a
a

b
`;

  expect(aggregateAnswersAll(data)).toEqual(6);
});
