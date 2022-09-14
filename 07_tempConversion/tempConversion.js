const ftoc = function(int) {
  return Math.round(((int - 32) * 5/9)*10 ) / 10;
;
};

const ctof = function(int) {
  return Math.round((int * 9/5 + 32)*10 ) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
