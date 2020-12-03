export const calcColissions = (data: string) => {
    let index = -3;
    return data
        .split('\n')
        .map(v => v.trim())
        .reduce<number>((prev, curr) => {
            index+=3;
            return curr[(index%curr.length)] === '#' ? prev + 1 : prev;
        }, 0);
};

export const calcColissionsMultiple = (data: string) => {
    const calcPath = ([rise, run]: number[]) => {
        let index = -rise;

        return data
            .split('\n')
            .map(v => v.trim())
            .filter((v, i) => {
                return run > 1 ? !((i)%run) : true
            })
            .reduce<number>((prev, curr) => {
                index+=rise;
                return curr[(index%curr.length)] === '#' ? prev + 1 : prev;
            }, 0);
    }

    return [[1,1],[3,1],[5,1],[7,1],[1,2]].reduce<number>((prev, curr) => {
        return prev *= calcPath(curr);
    }, 1);

}