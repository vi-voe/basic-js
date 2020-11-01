const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  for(let i = 0; i<arr.length; i++) {
    switch(arr[i]) {
    case '--discard-next':
      if(i+1<arr.length) {
        arr.splice(i,2)
      } else {
        arr.splice(i)
      }
      break;
    case '--double-next':
      if(i+1<arr.length) {
        arr[i] = arr[i+1];
      } else {
        arr.splice(i)
      }
      break;
    case '--discard-prev':
      if(i>0) {
        arr.splice(i-1,2)
      } else {
        arr.splice(i,1)
      }
      break;
    case '--double-prev':
      if(i>0) {
        arr[i] = arr[i-1];
      } else {
        arr.splice(i)
      }
      break;
    default: 
      break; 
  }
}
return arr;
};
