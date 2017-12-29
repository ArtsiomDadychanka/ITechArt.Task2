function map(array, cb) {
  if (!array || !cb) {
    return null;
  }
  var result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(cb(array[i], i, array));
  }

  return result;
}