function curry(func) {
  if (!func) {
    return null;
  }

  var arity = func.length;

  return (function resolver() {
    var args = [].slice.call(arguments);

    return function() {
      var localArgs = args.slice(),
        next;

      [].push.apply(localArgs, arguments);
      next = localArgs.length >= arity ? func : resolver;

      return next.apply(null, localArgs);
    };
  }());
}