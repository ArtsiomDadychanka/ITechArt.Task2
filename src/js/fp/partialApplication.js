function f(params, func) {
  var args = [].slice.call(arguments);
  var idxG = args.length - 1;
  var argsWithoutFunc = args.slice(0, args.length - 1);

  return function(params) {
    return args[idxG].apply(null, argsWithoutFunc.concat(params));
  }
}