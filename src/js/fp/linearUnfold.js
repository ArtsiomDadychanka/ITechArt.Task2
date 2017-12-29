function lu(cb, initValue) {
  var result = [];

  var tuple = cb(initValue);
  var resultValue = tuple[0];
  var nextState = tuple[1];

  while (true) {
    result.push(resultValue);

    tuple = cb(nextState);
    if (tuple === null) {
      break;
    }
    resultValue = tuple[0];
    nextState = tuple[1];
  }

  return result;
}