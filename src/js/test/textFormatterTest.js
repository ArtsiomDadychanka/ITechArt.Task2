describe("Text formatter", function() {
  var wordWrapping = "перенос по слову";
  var charWrapping = "перенос по символу";
  var sentenceWrapping = "перенос по предложению";
  var noWrap = "переносов нет";

  var maxLength = 8;
  var veryShortMaxLength = 2;
  var maxOutputString = 100;

  var veryShortString = "qwert"
  var veryShortStringExpectedstring = "qw\ner\nt"
  var shortString = "hello boys"
  var middleString = "hello boys, wazzup my nigga, yo";
  var expectedFormattedShortStringCharWrap8 = "hello bo\nys"
  var expectedFormattedMiddleStringCharWrap8 = "hello bo\nys, wazz\nup my ni\ngga, yo";
  var expectedFormattedMiddleStringWordWrap8 = "hello \nboys, \nwazzup \nmy \nnigga, \nyo";

  describe("Invalid input", function() {
    var emptyString = '';

    it("Function with parametr empty string returned empty string", function() {
      assert.isEmpty(textFormatter.handleText(emptyString, maxLength));
    });

    it("Function without max length param returned same string", function() {
      assert.equal(textFormatter.handleText(shortString), shortString);
    });

  });

  describe("Char wrapping", function() {
    it("Input: " + '\"' + veryShortString + '\";' +
      ' Max length: ' + veryShortMaxLength + ';' +
      ' Expected: ' + "qw\\ner\\nt" + ';',
      function() {
        assert.equal(textFormatter.handleText(
          veryShortString, veryShortMaxLength, charWrapping, maxOutputString
        ), veryShortStringExpectedstring);
      });
    it("Input: " + '\"' + shortString + '\";' +
      ' Max length: ' + maxLength + ';' +
      ' Expected: ' + "hello bo\\nys" + ';',
      function() {
        assert.equal(textFormatter.handleText(
          shortString, maxLength, charWrapping, maxOutputString
        ), expectedFormattedShortStringCharWrap8);
      });
    it("Input: " + '\"' + middleString + '\";' +
      ' Max length: ' + maxLength + ';' +
      ' Expected: ' + "hello bo\\nys, wazz\\nup my ni\\ngga, yo" + ';',
      function() {
        assert.equal(textFormatter.handleText(
          middleString, maxLength, charWrapping, maxOutputString
        ), expectedFormattedMiddleStringCharWrap8);
      });
  });

  describe('Word wrapping', function() {
    it("Input: " + '\"' + middleString + '\";' +
      ' Max length: ' + maxLength + ';' +
      ' Expected: ' + "hello \\nboys, \\nwazzup \\nmy \\nnigga, \\nyo" + ';',
      function() {
        assert.equal(textFormatter.handleText(
          middleString, maxLength, wordWrapping, maxOutputString
        ), expectedFormattedMiddleStringWordWrap8);
      });
  });

});