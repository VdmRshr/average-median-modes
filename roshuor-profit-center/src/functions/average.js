export const getAverageScores = (data) => {

        return data.reduce((acc, {value}) => acc + value, 0) / data.length;
}

