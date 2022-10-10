const palindromes = function (input) {
    //get array with all letters seperated
    let stringArray = [...input];
    //decalre reverse array
    let reverseStringArray = stringArray;
    //run string array trough proArray
    stringArray = procArray(stringArray);
    //run reverseStringArray trough proArray
    reverseStringArray = procArray(reverseStringArray);
    //reverse the reverse array
    reverseStringArray.reverse();
    //compare after joing and setting to lower case
    if (stringArray.join().toLowerCase() == reverseStringArray.join().toLowerCase()){
        return true;
    }
    else {
        return false;
    }
};

function procArray(array) {
    let regexVar = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    //strip array from punctaion with regex
    array = array.filter(word => !regexVar.test(word));
    //strip array from empty elements
    array = array.filter(item => item);
    //strip array from elements with only spaces
    array = array.filter((item) => item != " ");
    //return as string
    return array;
}

// Do not edit below this line
module.exports = palindromes;

