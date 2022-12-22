import {getAverageScores} from "./average";

export  const getStandardDeviation = (data) => {
    const total = 0;
    const averageScore = getAverageScores(data)
    const squaredDeviations = data.reduce((total, data) => {
        const deviation = data && data.value - averageScore;
        const deviationSquared = deviation * deviation;
        return total + deviationSquared;
    }, total);

    return Math.sqrt(squaredDeviations / data.length);
}