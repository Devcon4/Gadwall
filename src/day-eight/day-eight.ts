export const runCode = (data: string) => {
  const instructions = data.split('\n').map((i) => i.split(' '));

  const instructionLookup = {
    nop: () => {},
    acc: (reg: number) => (acc += reg),
    jmp: (reg: number) => (index += reg - 1),
  };

  let acc = 0,
    index = 0,
    cache = {};

  for (let i = 0; i < 9999; i++) {
    if (cache[index]) {
      break;
    }
    cache[index] = true;

    const [op, reg] = instructions[index];
    instructionLookup[op](+reg);

    index++;
  }
  return acc;
};

export const safeRunCode = (data: string) => {
  const instructions = data.split('\n').map((i) => i.split(' '));
  let timer = 10;
  const iter = function* () {
    for (let [i, [op, reg]] of instructions.entries()) {
      timer++;
      console.log(i, timer, op);
      if (op === 'acc') continue;
      let copy = [...instructions];

      if (op === 'nop') {
        copy[i][0] = 'jmp';
      }
      if (op === 'jmp') {
        copy[i][0] = 'nop';
      }

      console.log(copy);
      yield copy;
    }
  };

  const run = (instArr: string[][]) => {
    let acc = 0,
      index = 0,
      cache = {};

    const instructionLookup = {
      nop: () => {},
      acc: (reg: number) => (acc += reg),
      jmp: (reg: number) => (index += reg - 1),
    };

    for (let i = 0; i < 9999; i++) {
      if (index >= instArr.length) {
        console.log(instArr);
        return acc;
      }

      if (cache[index]) {
        console.log(cache, index);
        return undefined;
      }
      cache[index] = true;

      const [op, reg] = instArr[index];
      if (op !== 'jmp' || +reg > 0 || index !== 0) {
        // Bug when first instruction jumps backwards/repeates te first instruction.
        instructionLookup[op](+reg);
      }
      index++;
      console.log(instArr);
    }
    console.log(acc);
    return acc;
  };

  for (let set of iter()) {
    const res = run(set);
    console.log(res);

    if (res) {
      return res;
    }
    continue;
  }
};
