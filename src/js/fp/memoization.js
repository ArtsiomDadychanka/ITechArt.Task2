function memoization(fn) {
  if (!fn) {
    return null;
  }
  var cache = {};

  return function() {
    var args = [].slice.call(arguments);
    var result;

    if (args in cache) {
      result = cache[args];
      console.log("Take result from cache:" + result);
      return result;
    }
    result = fn.apply(null, args);
    console.log("Calculate result: " + result);
    cache[args] = result;

    return result;
  };
}