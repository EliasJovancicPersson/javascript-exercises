const add = function(termA, termB) {
  return termA + termB;
};

const subtract = function(termA, termB) {
  return termA - termB;
};

const sum = function(terms) {
  return terms.reduce((a, b) => a + b,0);
};

const multiply = function(terms) {
  return terms.reduce((a, b) => a * b, 1);
};

const power = function(number,exp) {
  let total = number;
  for (let i = 0; i < (exp -1); i++) {
    total = total * number;
  }
  return total;
};

const factorial = function(fac) {
  let total = 1;
  for (let i = fac; i > 1; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
