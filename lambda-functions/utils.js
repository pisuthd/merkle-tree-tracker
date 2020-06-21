exports.round = (value, precision, up) => {
    const scale = Math.pow(10, precision)

    if (up) {
        return Math.ceil(value * scale) / scale;
    } else {
        return Math.floor(value * scale) / scale;
    }
}

exports.generatePoints = (value) => {

    const rounding = (value, precision, up) => {
        const scale = Math.pow(10, precision)

        if (up) {
            return Math.ceil(value * scale) / scale;
        } else {
            return Math.floor(value * scale) / scale;
        }
    }

    let result = [];
    for (let i = 0; i <= 6; i++) {
        const floor = rounding(value, i, false);
        result.push(floor)
        const ceil = rounding(value, i, true);
        result.push(ceil)
    }
    return result;
}