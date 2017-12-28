function memoization(fn) {
  var cache = {};

  return function() {
    var args = [].slice.call(arguments);
    var result;

    result = args in cache ?
      cache[args] :
      fn.apply(null, args);

    cache[args] = result;

    return result;
  }
}