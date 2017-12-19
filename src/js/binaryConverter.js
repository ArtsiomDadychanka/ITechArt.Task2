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
      return null
    }

    var base = 2;
    var decimal = 0;
    for (var i = 0; i < vector.length; i++) {
      if (+vector[i] == 1) {
        decimal += Math.pow(2, i);
      } else if (+vector[i] == 0) {
        decimal += 0;
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