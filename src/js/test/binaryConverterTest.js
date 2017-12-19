describe("Binary converter", function() {

  describe("Invalid input", function() {
    var empty = [];
    var notNum = '1qq';
    var notBits = [0, 2, 3, 1, 1, 0];

    it("toBinary called with not num returned null", function() {
      assert.isNull(binaryConverter.toBinary(notNum));
    });
    it("toDecimal called with null returned null", function() {
      assert.isNull(binaryConverter.toDecimal(null));
    });
    it("toDecimal called with [] returned null", function() {
      assert.isNull(binaryConverter.toDecimal(empty));
    });
    it("toDecimal called with [] contained not bits returned null", function() {
      assert.isNull(binaryConverter.toDecimal(empty));
    });
  });

  describe("toDecimal", function() {
    var vector = [0, 0, 0, 1];
    var expected = 8;

    it("vector " + '[' + vector + ']' + ' to decimal is ' + expected, function() {
      assert.equal(binaryConverter.toDecimal(vector), expected);
    });

  });

  describe("toDecimal", function() {
    var decimal = 61;
    var expected = [1, 1, 1, 1, 0, 1];

    it("decimal " + decimal + ' to binary is ' + '[' + expected + ']', function() {
      assert.sameOrderedMembers(binaryConverter.toBinary(decimal), expected);
    });

  });

});