const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let array = members.map(el => {
    if (typeof el === 'string') {
      return el.split(" ").join("").substring(0, 1)
    }
  })
  let result = array.join('').toUpperCase().split('').sort().join('');
  return result
};
