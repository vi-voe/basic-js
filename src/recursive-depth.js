const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrayDepth = 1;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        this.calculateDepth(el)
      } else {
        return arrayDepth
      }
    });
    return arrayDepth;
  }
};
