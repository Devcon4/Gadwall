const checkPolicy = (data: string) => {
    let parsed = data
        .trim()
        .split('\n')
        .map(row => {
            let [policy, password] = row.trim().split(':');
            let [range, matcher] = policy.split(' ');
            let [min, max] = range.split('-');

            return {
                min,
                max,
                matcher,
                password
            };
        });

        const res = parsed.map(d => {
            const matchCount = (d.password.match(new RegExp(d.matcher, 'g')) || []).length;
            return matchCount >= +d.min && matchCount <= +d.max;
        });

        return res.filter(v => v).length;
};

export default checkPolicy;