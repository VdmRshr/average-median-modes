export  const getMedian = (data) => {
    data.sort(function (a, b) {
        return a.value - b.value;
    });
    const half = Math.floor(data.length / 2);

    if (data.length % 2) {
        return data[half].value;
    }
    return (data[half - 1].value + data[half].value) / 2;

}