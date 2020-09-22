const CustomError = require("../extensions/custom-error");
let earsAmount;
module.exports = function countCats(...args) {
  earsAmount = 0;
  return throughtArray(args);
};

function throughtArray(array) {
  array.forEach(function (el) {
    if (!Array.isArray(el)) {
      if (el === '^^') {
        earsAmount++;
      }
    } else {
      throughtArray(el)
    }
  })
  return earsAmount;
}