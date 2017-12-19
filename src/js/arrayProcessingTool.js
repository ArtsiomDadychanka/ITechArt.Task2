var arrayProcessingTool = {
  getMaxSubSum2: function(arrayOfIntegers) {
    if (!this._isValidInput(arrayOfIntegers)) {
      return null;
    }
    var maxSum = null;

    for (var i = 0; i < arrayOfIntegers.length; i++) {
      var sum = 0;

      for (var j = i; j < arrayOfIntegers.length; j++) {
        sum += arrayOfIntegers[j];
        maxSum = Math.max(maxSum, sum);
      }
    }

    return maxSum;
  },
  getMaxSubSum: function(arrayOfIntegers) {
    if (!this._isValidInput(arrayOfIntegers)) {
      return null;
    }

    var maxsofar = 0;
    var maxendinghere = 0;

    for (var i = 0; i < arrayOfIntegers.length; i++) {
      maxendinghere = Math.max(maxendinghere + arrayOfIntegers[i], 0);
      maxsofar = Math.max(maxendinghere, maxsofar);
      // console.log(maxendinghere);
      // console.log(maxsofar);
    }

    return maxsofar;
  },
  searchMin: function(array) {
    if (!this._isValidInput(array)) {
      return null;
    }
    var comparerMin = function(a, b) {
      return a < b ? a : b;
    }
    return this._search(array, comparerMin);
  },
  searchMax: function(array) {
    if (!this._isValidInput(array)) {
      return null;
    }
    var comparerMax = function(a, b) {
      return a > b ? a : b;
    }
    return this._search(array, comparerMax);
  },
  searchMedian: function(array) {
    if (!this._isValidInput(array)) {
      return null;
    }

    var sortedArray = array.sort();
    var median = null;
    if (sortedArray.length % 2 == 0) {
      var lowIndex = sortedArray.length / 2 - 1;
      median = (sortedArray[lowIndex] + sortedArray[lowIndex + 1]) / 2;
    } else {
      median = sortedArray[Math.floor(sortedArray.length / 2)];
    }

    return median;
  },
  LIS: function(array) {
    if (!this._isValidInput(array)) {
      return null
    }
  },
  _search: function(array, comparer) {
    var val = array[0];
    for (var i = 0; i < array.length; i++) {
      val = comparer(val, array[i]);
    }
    return val;
  },
  _isValidInput: function(array) {
    if (!array || array.length == 0) {
      return false;
    }
    return true;
  },
};