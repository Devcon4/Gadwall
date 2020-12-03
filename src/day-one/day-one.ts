const checkExpenses = (data: string) => {
    return data
        .split('\n')
        .map(v => +v)
        .map((val, _, arr) => {
            const match = arr.map(v => v + val === 2020 ? v : undefined).filter(v => v).shift();
            return match ? val * match: undefined;
        })
        .filter(v => v)
        .shift();
};

export default checkExpenses;