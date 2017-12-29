var arraySorter = {
  bubbleSort: function(array, order) {
    var sortedArray = array.slice(0);
    var sortOrder = this._getOrder(order);

    var temp = null;

    for (var i = 0; i < sortedArray.length; i++) {
      for (var j = sortedArray.length - 1; j > i; j--) {
        if (sortOrder.comparer(sortedArray[j - 1], sortedArray[j])) {
          temp = sortedArray[j - 1];
          sortedArray[j - 1] = sortedArray[j];
          sortedArray[j] = temp;
        }
      }
    }

    return sortedArray;
  },
  selectSort: function(array, order) {
    var sortedArray = array.slice(0);
    var sortOrder = this._getOrder(order);

    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
      var min = i;
      for (var j = i + 1; j < n; j++) {
        if (sortOrder.comparer(sortedArray[min], sortedArray[j])) {
          min = j;
        }
      }
      var t = sortedArray[min];
      sortedArray[min] = sortedArray[i];
      sortedArray[i] = t;
    }

    return sortedArray;
  },
  insertionSort: function(array, order) {
    var sortedArray = array.slice(0);
    var sortOrder = this._getOrder(order);

    var n = sortedArray.length;
    for (var i = 0; i < n; i++) {
      var v = sortedArray[i],
        j = i - 1;
      while (j >= 0 && sortOrder.comparer(sortedArray[j], v)) {
        sortedArray[j + 1] = sortedArray[j];
        j--;
      }
      sortedArray[j + 1] = v;
    }

    return sortedArray;
  },
  defaultSort: function(array, order) {
    var sortedArray = array.sort(function(a, b) {
      return a - b;
    });

    return order === this._sortOrder.descending.type ?
      sortedArray.reverse() :
      sortedArray;
  },
  _sortOrder: {
    descending: {
      type: "desc",
      comparer: function(a, b) {
        return a <= b;
      },
    },
    ascending: {
      type: "asc",
      comparer: function(a, b) {
        return a > b;
      }
    }
  },
  _getOrder: function(order) {
    return order === this._sortOrder.ascending.type ?
      this._sortOrder.ascending :
      this._sortOrder.descending;
  }
};