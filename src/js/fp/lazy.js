function lazy(fn) {
  if (!fn) {
    return null;
  }
  var result;
  var lazyEval = fn.bind.apply(fn, arguments);

  return function() {
    if (result) {
      console.log('Remembered result: ' + result);
      return result;
    }
    result = lazyEval();
    console.log('Calculated result: ' + result);
    return result;
  };
}