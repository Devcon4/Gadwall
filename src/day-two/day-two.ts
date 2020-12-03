export const checkPolicy = (data: string) => {
    return data
        .trim()
        .split('\n')
        .map(row => {
            const [policy, password] = row.trim().split(':');
            const [range, matcher] = policy.split(' ');
            const [min, max] = range.split('-');

            const matchCount = (password.match(new RegExp(matcher, 'g')) || []).length;
            return matchCount >= +min && matchCount <= +max;
        })
        .filter(v => v)
        .length;
};

export const checkPolicyStrict = (data: string) => {
    return data
        .trim()
        .split('\n')
        .map(row => {
            const [policy, password] = row.trim().split(':');
            const [range, matcher] = policy.split(' ');
            const positions = range.split('-');

            const posCheck = positions.map(p => password[+p] === matcher).filter(v => v).length;
            return posCheck === 1;
            
        })
        .filter(v => v)
        .length;
};
