const fibonacci = function(num) {
    if (num < 1) {
        return "OOPS"
    }
    let fibonacciArray = [0,1,1];//finbonacci starts with 0+1
    let f1 = fibonacciArray[1]
    let f2 = fibonacciArray[1]
    
    for (let i = 0; i < num; i++) {
        let oldF2 = f2 //hold f2
        
        f2 = f1 + f2; //sum for fibonacci
        f1 = oldF2  //set f1 to old f2

        fibonacciArray.push(f2);//add f2 to array
    }
    return fibonacciArray[num];//return index of num in array
};

// Do not edit below this line
module.exports = fibonacci;
