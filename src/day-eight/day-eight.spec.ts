import { runCode, safeRunCode } from './day-eight';

test('day eight part one', () => {
  const data = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

  expect(runCode(data)).toEqual(5);
});

test('day eight part two', () => {
  const data = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

  expect(safeRunCode(data)).toEqual(8);
});
