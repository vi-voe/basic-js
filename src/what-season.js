const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  let month = date.getMonth();
  try {
    switch(true) {
      case month == 11 || month == 0 ||  month == 1 :
        return 'winter';
        break;
      case month > 1 &&  month < 5 :
        return 'spring';
          break;
      case month > 4 &&  month < 8 :
        return 'summer';
        break;
      case month > 7 &&  month < 11:
        return 'autumn';
        break;
    }
  }
  catch(err) {
    return err;
  }
  
};
