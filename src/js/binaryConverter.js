var binaryConverter = {
  toBinary: function(decimal) {
    if (!this._isNumeric(decimal)) {
      return null;
    }

    var base = 2;
    var binVector = [];
    var reminder = 0;

    while (decimal > 0) {
      binVector.push(decimal % 2);

      decimal = Math.floor(decimal / 2);
    }

    return binVector.reverse();
  },
  toDecimal: function(vector) {
    if (this._isEmptyOrNullArray(vector)) {
      return null;
    }

    var base = 2;
    var decimal = 0;
    var currentValue = null;
    for (var i = 0; i < vector.length; i++) {
      currentValue = +vector[i];
      if (currentValue === 1 || currentValue === 0) {
        decimal += currentValue * Math.pow(2, i);
      } else {
        return null;
      }
    }

    return decimal;
  },
  _isEmptyOrNullArray: function(array) {
    if (!array || array.length == 0) {
      return true;
    }
    return false;
  },
  _isNumeric: function(num) {
    return !isNaN(+num) && isFinite(num);
  }
};