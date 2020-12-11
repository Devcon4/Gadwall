export const chainAdapters = (data: string) => {
    const parsed = data
        .split('\n')
        .map(v => +v)
        .sort((a,b) => a > b ? 1: -1);

        parsed.push(parsed[parsed.length-1]+3);

        const res = parsed.reduce((prev, curr, i, arr) => {
            let diff = curr-(arr[i-1] || 0);
            if(diff <= 3) prev[diff] += 1;
            return prev;
        }, {1:0,2:0,3:0});

    return res[1] * res[3];
};

export const adapterPermutations = (data: string) => {
    let parsed = data
        .split('\n')
        .map(v => +v)
        .sort((a,b) => a > b ? 1: -1);
    const target = parsed[parsed.length-1]+3;
    parsed = [0, ...parsed, target];

    let diffs = [];
    for(let [i, v] of parsed.entries()) {
        const diff = parsed[i+1]-parsed[i];
        if (diff <= 3) {
            diffs.push(diff);
        }
    }

    return diffs
        .join('')
        .split('3')
        .map(block => block.length)
        .filter(width => width >= 2)
        .map(width => width - 1)
        .reduce((mult, num) => mult * (Math.pow(2, num) - (num===3?1:0)), 1);
};