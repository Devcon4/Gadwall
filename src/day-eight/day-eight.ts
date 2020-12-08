export const runCode = (data: string) => {
  const instructions = data.split("\n").map((i) => i.split(" "));

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
  const instructions = data.split("\n").map((i) => i.split(" "));
  const identity = x => x.concat();

  const run = (instArr: string[][]) => {
    let acc = 0,
      index = 0,
      cache = {};

    const instructionLookup = {
      nop: () => {},
      acc: (reg: number) => (acc += reg),
      jmp: (reg: number) => (index += reg-1),
    };

    for (let i = 0; i < 9999; i++) {
      if (index >= instArr.length) return acc;
      if (cache[index]) return undefined;

      cache[index] = true;

      const [op, reg] = instArr[index];
      instructionLookup[op](+reg);
      index++;
    }
    return acc;
  };

  for (let i in instructions) {
    const [op, reg] = instructions[i];
    if (op === "acc") continue;
    let copy = instructions.map(identity);
    copy[i][0] = op === "nop" ? "jmp" : "nop";
    const res = run(copy);
    if (res) return res;
  }
};
