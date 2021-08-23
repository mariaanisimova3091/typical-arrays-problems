exports.min = function min(array) {
    if (!arguments[0] || !array.length) return 0;
    return array.sort(function (a, b) {
        return a - b;
    })[0];
};

exports.max = function max(array) {
    if (!arguments[0] || !array.length) return 0;
    return array.sort(function (a, b) {
        return b - a;
    })[0];
};

exports.avg = function avg(array) {
    if (!arguments[0] || !array.length) return 0;
    const sum = array.reduce((a, b) => a + b);
    return sum / array.length;
};
