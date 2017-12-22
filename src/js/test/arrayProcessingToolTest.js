describe("Array processing tool", function() {
  describe("Null insteed array", function() {
    var testArray = null;

    it("searchMin returned null", function() {
      assert.isNull(arrayProcessingTool.searchMin(testArray));
    });
    it("searchMax returned null", function() {
      assert.isNull(arrayProcessingTool.searchMax(testArray));
    });
    it("searchMedian returned null", function() {
      assert.isNull(arrayProcessingTool.searchMedian(testArray));
    });
    it("getMaxSubSum returned null", function() {
      assert.isNull(arrayProcessingTool.getMaxSubSum(testArray));
    });
    it("getMaxSubSum2 returned null", function() {
      assert.isNull(arrayProcessingTool.getMaxSubSum2(testArray));
    });
    it("LIS returned null", function() {
      assert.isNull(arrayProcessingTool.longestIncreasingSubsequence(testArray));
    });
  });

  describe("Empty array", function() {
    var testArray = [];

    it("searchMin returned null", function() {
      assert.isNull(arrayProcessingTool.searchMin(testArray));
    });
    it("searchMax returned null", function() {
      assert.isNull(arrayProcessingTool.searchMax(testArray));
    });
    it("searchMedian returned null", function() {
      assert.isNull(arrayProcessingTool.searchMedian(testArray));
    });
    it("getMaxSubSum returned null", function() {
      assert.isNull(arrayProcessingTool.getMaxSubSum(testArray));
    });
    it("getMaxSubSum2 returned null", function() {
      assert.isNull(arrayProcessingTool.getMaxSubSum2(testArray));
    });
    it("LIS returned null", function() {
      assert.isNull(arrayProcessingTool.longestIncreasingSubsequence(testArray));
    });
  });

  describe("Seaching", function() {
    var testArray = [1, 2, 3, 4, 2, 77, -5, 58],
      testArray2 = [31, 44, 58, -5, 12, 0],
      testArray3 = [-45, 77, 56, 22, 12, -14, -25];
    var expectedMedianOfArray2 = 21.5,
      expectedMedianOfArray3 = 12;

    it("Min value of " + '[' + testArray + ']' + " is " + Math.min.apply(null, testArray), function() {
      assert.equal(arrayProcessingTool.searchMin(testArray), Math.min.apply(null, testArray));
    });

    it("Max value of " + '[' + testArray + ']' + " is " + Math.max.apply(null, testArray), function() {
      assert.equal(arrayProcessingTool.searchMax(testArray), Math.max.apply(null, testArray));
    });

    it("Median value of " + '[' + testArray2 + ']' + " is " + expectedMedianOfArray2, function() {
      assert.equal(arrayProcessingTool.searchMedian(testArray2), expectedMedianOfArray2);
    });
    it("Median value of " + '[' + testArray3 + ']' + " is " + expectedMedianOfArray3, function() {
      assert.equal(arrayProcessingTool.searchMedian(testArray3), expectedMedianOfArray3);
    });
  });

  describe("Getting max sub sum from array", function() {
    var testArray = [31, -41, 59, 26, -53, 58, 97, -93, -23, 84];
    var expectedMaxSubSum = 187;

    it("Max sub sum from " + '[' + testArray + ']' + ' is ' + expectedMaxSubSum + ' function with O(n^2)', function() {
      assert.equal(arrayProcessingTool.getMaxSubSum2(testArray), expectedMaxSubSum);
    });

    it("Max sub sum from " + '[' + testArray + ']' + ' is ' + expectedMaxSubSum + ' function with O(n)', function() {
      assert.equal(arrayProcessingTool.getMaxSubSum(testArray), expectedMaxSubSum);
    });

    it("Is equal result two function", function() {
      assert.equal(arrayProcessingTool.getMaxSubSum(testArray), arrayProcessingTool.getMaxSubSum2(testArray));
    });

  });

  describe("Longest increasing subsequence", function() {
    var arr = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1];
    var expected = [1, 2, 5, 7, 8, 90];
    it("Source array: " +
      "[" + arr + "]; " +
      "Expected: " +
      "[" + expected + "]; ",
      function() {
        assert.sameOrderedMembers(arrayProcessingTool.longestIncreasingSubsequence(arr), expected);
      });

  });
});