
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length)
    return 0;
  else
    return array.sort( (current, next) => current - next)[0];
}

exports.max = function max (array) {
  if (!Array.isArray(array) || !array.length)
    return 0;
  else
    return array.sort( (current, next) => current - next)[array.length - 1];
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || !array.length)
    return 0;
  else {
    let arraySum = array.reduce( (prevElem, currElem) => prevElem + currElem );
    return arraySum / array.length;
  }
}
