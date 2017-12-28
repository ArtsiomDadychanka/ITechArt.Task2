function lu(cb, initValue) {
  var result = [];
  var flag = true;


  var element;
  while (flag) {
    var element = cb(value);
    element === null ?
      flag = !flag :
      result.push(element);
  }

  return result;
}