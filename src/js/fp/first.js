function first(array, predicat) {
  for (var i = 0; i < array.length; i++) {
    if (predicat(array[i])) {
      return array[i];
    }
  }
}