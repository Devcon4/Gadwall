export const checkExpensesTwo = (data: string) => {
    return data
        .split('\n')
        .map(v => +v)
        .flatMap((v, _, arr) => arr.map(u => ([v,u])))
        .reduce<number>((prev, [v,u]) => {
            if (v+u === 2020) {
                prev = v*u;
            }
            return prev;
        }, undefined);
};

export const checkExpensesThree = (data: string) => {
    const iter = function* (arr: number[]) {
        for(const i of arr) {
            for(const j of arr) {
                for(const k of arr) {
                    if(i+j+k === 2020) {
                        return i*j*k;
                    }
                }
            }
        }
    }

    return iter(data.split('\n').map(v => +v)).next().value;
}
