var stringCalculator = {
  add: function(a, b) {
    if (!this._isNumeric(a) || !this._isNumeric(b)) {
      return null;
    }
    return +a + +b;
  },
  mult: function(a, b) {
    if (!this._isNumeric(a) || !this._isNumeric(b)) {
      return null;
    }
    return +a * +b;
  },
  div: function(a, b) {
    if (!this._isNumeric(a) || !this._isNumeric(b)) {
      return null;
    }
    return +a / +b;
  },
  sub: function(a, b) {
    if (!this._isNumeric(a) || !this._isNumeric(b)) {
      return null;
    }
    return +a - +b;
  },
  _isNumeric: function(sNum) {
    return !isNaN(+sNum) && isFinite(sNum);
  }
};