const array = [15, 16, 17, 18, 19];

function reduce(accumulator,currentValue,index) {
    const returns = accumulator + currentValue;
    console.log(
        `accmulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reduce);