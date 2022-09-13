const sumAll = function (int1, int2) {
    //check if not number & if negativ
    if (typeof int1 != 'number' ||typeof int2 != 'number' || int1 < 0 || int2 < 0) return "ERROR";
    //get numbers between int1 & int2 into array
    const numbersBetween = [];
    let sum = 0;
    //add all numbers togehter in loop
    if (int1 > int2) {
        for (let i = int2; i < int1 + 1; i++) {
            sum += i;
        }
    }
    else {
        for (let i = int1; i < int2 + 1; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
