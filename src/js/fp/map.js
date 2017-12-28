function map(array, cb) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(cb(array[i], i, array));
  }

  return result;
}