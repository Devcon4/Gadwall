const checkPolicy = (data: string) => {
    return data
        .trim()
        .split('\n')
        .map(row => {
            let [policy, password] = row.trim().split(':');
            let [range, matcher] = policy.split(' ');
            let [min, max] = range.split('-');

            const matchCount = (password.match(new RegExp(matcher, 'g')) || []).length;
            return matchCount >= +min && matchCount <= +max;
        })
        .filter(v => v)
        .length;
};

export default checkPolicy;