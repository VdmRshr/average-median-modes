export  const getModes = (data) => {
    let most = 2;
    const count = {};

    const modes = data.reduce((acc, {value}) => {
        const curr = (count[value] || 0) + 1;
        count[value] = curr;

        if (curr > most) {
            most = curr;
            acc.length = 0;
            acc.push(value);
        } else if (curr === most) {
            acc.push(value);
        }

        return acc;
    }, []);

    if (modes.length === 0) {
        return ' - ';
    }

    return modes.join(', ');
}