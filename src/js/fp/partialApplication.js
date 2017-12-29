function f(params) {
  var args = [].slice.call(arguments);
  var idxFn = args.length - 1;
  var argsWithoutFunc = args.slice(0, args.length - 1);

  return function(params) {
    return args[idxFn].apply(null, argsWithoutFunc.concat(params));
  };
}