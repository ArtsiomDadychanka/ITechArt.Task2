function lf(array, callback, initialValue) {
  var lastResult = initialValue || null;

  for (var i = 0; i < array.length; i++) {
    lastResult = callback(lastResult, array[i], i, array);
  }

  return lastResult;
}