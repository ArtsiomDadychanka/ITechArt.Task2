var cachingCalculator = {
  add: function(a, b) {
    var op = this._operations.add;
    var result;
    if (!this.cache.isCached(a, b, op)) {
      result = a + b;
      this.cache.add(a, b, op, result);
      return result;
    }
    result = this.cache.getResult(a, b, op);
    return result;
  },
  sub: function(a, b) {
    var op = this._operations.sub;
    var result;
    if (!this.cache.isCached(a, b, op)) {
      result = a - b;
      this.cache.add(a, b, op, result);
      return result;
    }
    result = this.cache.getResult(a, b, op);
    return result;
  },
  mult: function(a, b) {
    var op = this._operations.mult;
    var result;
    if (!this.cache.isCached(a, b, op)) {
      result = a * b;
      this.cache.add(a, b, op, result);
      return result;
    }
    result = this.cache.getResult(a, b, op);
    return result;
  },
  div: function(a, b) {
    var op = this._operations.div;
    var result;
    if (!this.cache.isCached(a, b, op)) {
      result = a / b;
      this.cache.add(a, b, op, result);
      return result;
    }
    result = this.cache.getResult(a, b, op);
    return result;
  },
  _operations: {
    add: '+',
    sub: '-',
    mult: '*',
    div: '/',
  },
  cache: {
    _cachedExpressions: [],
    _cachedOperations: [],
    _maxCacheSize: 100,
    setMaxCacheSize: function(size) {
      if (+size < 0) {
        throw new Error("Invalid size");
      }
      this._maxCacheSize = size;
    },
    defineCachedOperation: function(operation) {
      this._cachedOperations.push(operation);
    },
    add: function(a, b, operation, result) {
      if (this.isFull()) {
        throw new Error("Cache is full");
      }
      if (this.isDefinedOperation(operation)) {
        this._cachedExpressions.push({
          a: a,
          b: b,
          operation: operation,
          result: result
        });
      }
    },
    getResult: function(a, b, operation) {
      var idx = this._cachedExpressions.findIndex(function(element) {
        return a === element.a &&
          b === element.b &&
          operation === element.operation;
      });
      if (idx === -1) {
        return null;
      }
      console.log("get result from cache: " + this._cachedExpressions[idx].result);
      return this._cachedExpressions[idx].result;
    },
    clear: function() {
      this._cachedExpressions = [];
    },
    isFull: function() {
      return this._cachedExpressions.length === this._maxCacheSize;
    },
    isCached: function(a, b, operation) {
      var idx = this._cachedExpressions.findIndex(function(element) {
        return a === element.a &&
          b === element.b &&
          operation === element.operation;
      });
      return idx !== -1;
    },
    isDefinedOperation: function(op) {
      this._cachedOperations.find(function(op) {
        return op === operation;
      });
    }
  }
}