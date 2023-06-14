/**
 * upgrades 0-calcul.js fn
 * adds a new arg type
 * when type is SUM, a and b are added
 * when type is SUBTRACT, subtract a and b
 * when type is DIVIDE, divide a and b
 */

const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
