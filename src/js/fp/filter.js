function filter(array, cb) {
  var result = [];
  var current;

  for (var i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}