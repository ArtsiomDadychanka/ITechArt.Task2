var arrayProcessingTool = {
  getMaxSubSum2: function(arrayOfIntegers) {
    if (!this._isValidInput(arrayOfIntegers)) {
      return null;
    }
    if (this._isEmpty(arrayOfIntegers)) {
      return 0;
    }
    var maxSum = 0;

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
    if (this._isEmpty(arrayOfIntegers)) {
      return 0;
    }

    var maxsofar = 0;
    var maxendinghere = 0;

    for (var i = 0; i < arrayOfIntegers.length; i++) {
      maxendinghere = Math.max(maxendinghere + arrayOfIntegers[i], 0);
      maxsofar = Math.max(maxendinghere, maxsofar);
    }

    return maxsofar;
  },
  searchMin: function(array) {
    if (!this._isValidInput(array) || this._isEmpty(array)) {
      return null;
    }
    var comparerMin = this._comparators.comparerMin;
    return this._search(array, comparerMin);
  },
  searchMax: function(array) {
    if (!this._isValidInput(array) || this._isEmpty(array) || this._isEmpty(array)) {
      return null;
    }
    var comparerMax = this._comparators.comparerMax;
    return this._search(array, comparerMax);
  },
  searchMedian: function(array) {
    if (!this._isValidInput(array) || this._isEmpty(array)) {
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
  longestIncreasingSubsequence: function(array) {
    if (!this._isValidInput(array) || this._isEmpty(array)) {
      return null;
    }

    var n = array.length;
    var lis = [];
    var lis2 = {
      start: 0,
      length: 0
    };
    var temp = [];
    var temp2 = {
      start: 0,
      length: 0
    };

    for (var i = 0; i < n; i++) {
      if (array[i] > array[i - 1]) {
        temp2.length++;
      } else {
        if (lis2.length < temp2.length) {
          lis2.length = 0;
          lis2.start = 0;

          lis2.length = temp2.length;
          lis2.start = temp2.start;

          temp2.start = i;
          temp2.length = 1;
        }
      }
    }

    return array.slice(lis2.start, lis2.start + lis2.length);
  },
  _comparators: {
    comparerMin: function(a, b) {
      return a < b ? a : b;
    },
    comparerMax: function(a, b) {
      return a > b ? a : b;
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
    if (!array) {
      return false;
    }
    return true;
  },
  _isEmpty: function(array) {
    if (array.length === 0) {
      return true;
    }
    return false;
  }
};