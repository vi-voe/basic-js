const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(!str) return;
  let newStr = '';
  let separator = options.separator || '+';
  let repeat = options.repeatTimes || 1;
  let addRepeat = options.additionRepeatTimes || 1;
  let add = options.addition || '';
  let addSep = options.additionSeparator || '';

  for(let i = 0; i < repeat; i++) {
    if(newStr.length == 0) {
      newStr = str;
    } else {
      newStr = newStr + separator + str;
    }
    if (add.length > 0 && addRepeat != undefined) {
      for(let j = 0; j < addRepeat; j++) {
        newStr = newStr+add;
        if(j<addRepeat-1) {
            newStr = newStr + addSep
        } 
      }
    }
    
  }

  return newStr;
};
