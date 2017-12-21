describe("Array sorter", function() {
  var array = [12, 4, 3, 11, 22, -1];
  var expected = [-1, 3, 4, 11, 12, 22];
  var expectedReverse = expected.slice(0).reverse();

  describe("Bubble sort", function() {
    it("Input array: [" + array + "] ;" +
      "Result array: [" + expectedReverse + "] ; Order by desc;",
      function() {
        assert.sameOrderedMembers(arraySorter.bubbleSort(array), expectedReverse);
      });
    it("Input array: [" + array + "] ;" +
      "Result array: [" + expected + "] ; Order by asc;",
      function() {
        assert.sameOrderedMembers(arraySorter.bubbleSort(array, "asc"), expected);
      });
  });

  describe("Select sort", function() {
    it("Input array: [" + array + "] ;" +
      "Result array: [" + expectedReverse + "] ; Order by desc;",
      function() {
        assert.sameOrderedMembers(arraySorter.selectSort(array), expectedReverse);
      });
    it("Input array: [" + array + "] ;" +
      "Result array: [" + expected + "] ; Order by asc;",
      function() {
        assert.sameOrderedMembers(arraySorter.selectSort(array, "asc"), expected);
      });
  });

  describe("Insertion sort", function() {
    it("Input array: [" + array + "] ;" +
      "Result array: [" + expectedReverse + "] ; Order by desc;",
      function() {
        assert.sameOrderedMembers(arraySorter.insertionSort(array, "desc"), expectedReverse);
      });
    it("Input array: [" + array + "] ;" +
      "Result array: [" + expected + "] ; Order by asc;",
      function() {
        assert.sameOrderedMembers(arraySorter.insertionSort(array, "asc"), expected);
      });
  });

  describe("Default sort", function() {
    it("Input array: [" + array + "] ;" +
      "Result array: [" + expectedReverse + "] ; Order by desc;",
      function() {
        assert.sameOrderedMembers(arraySorter.defaultSort(array, "desc"), expectedReverse);
      });
    it("Input array: [" + array + "] ;" +
      "Result array: [" + expected + "] ; Order by asc;",
      function() {
        assert.sameOrderedMembers(arraySorter.defaultSort(array, "asc"), expected);
      });
  });

});