var cachingCalculator = {
  add: function(a, b) {
    var op = this._operations.add;
    var result;
    if (!this.cache.isCached(a, b, op)) {
      result = a + b;
      console.log("It's value calculating: " + result);
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
      console.log("It's value calculating: " + result);
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
      console.log("It's value calculating: " + result);
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
      console.log("It's value calculating: " + result);
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
    _cache2: {},
    _cachedOperations: [],
    _maxCacheSize: 100,
    _cacheLength: 0,
    setMaxCacheSize: function(size) {
      this._maxCacheSize = size;
    },
    defineCachedOperation: function(operation) {
      this._cachedOperations.push(operation);
      this._cache2[operation] = {};
    },
    add: function(a, b, operation, result) {
      if (this.isFull()) {
        return;
      }
      if (this.isDefinedOperation(operation)) {
        this._cache2[operation][a.toString() + b] = result;
        this._cacheLength++;
      }
    },
    getResult: function(a, b, operation) {
      var result = this._cache2[operation][a.toString() + b];
      console.log("It's value taking from cache: " + result);
      return typeof result === typeof undefined ? null : result;
    },
    clear: function() {
      this._cache2 = {};
    },
    isFull: function() {
      return this._cacheLength >= this._maxCacheSize;
    },
    isCached: function(a, b, operation) {
      var cacheOfOperation = this._cache2[operation];
      var result = typeof cacheOfOperation === typeof undefined ?
        undefined :
        cacheOfOperation[a.toString() + b];
      return typeof result === typeof undefined ? false : true;
    },
    isDefinedOperation: function(op) {
      for (var i = 0; i < this._cachedOperations.length; i++) {
        if (this._cachedOperations[i] === op) {
          return true;
        }
      }

      return false;
    }
  }
};