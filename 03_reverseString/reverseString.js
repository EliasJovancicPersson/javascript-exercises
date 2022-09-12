const reverseString = function(string) {
    const stringArray = string.split("");
    const revStringArray = stringArray.reverse();
    return revStringArray.join('').toString();
};

// Do not edit below this line
module.exports = reverseString;
