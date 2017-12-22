describe("Date display formatter", function() {

  describe("Short date", function() {
    var date = '31102011';
    var expected = '31-10-2011';

    it("Source date:" +
      '[' + date + ']; ' +
      'Result date:' +
      '[' + expected + ']; ',
      function() {
        assert.equal(
          dateDisplayFormatter.getShortDate(date), expected
        );
      });
  });

  describe("Long date", function() {
    var date = '31102011';
    var expected = '31 October 2011';

    it("Source date:" +
      '[' + date + ']; ' +
      'Result date:' +
      '[' + expected + ']; ',
      function() {
        assert.equal(
          dateDisplayFormatter.getLongDate(date), expected
        );
      });
  });

  describe("Date with regexp", function() {
    var date = '20130431';
    var inRegexp = 'YYYYMMDD';
    var outRegexp = 'MM-DD-YYYY';
    var expected = '31 April 2013';
    var expectedWithOutRegExp = '04-31-2013';

    it("Source date:" +
      '[' + date + ']; ' +
      "Input regex:" +
      '[' + inRegexp + ']; ' +
      'Result date:' +
      '[' + expected + ']; ',
      function() {
        assert.equal(
          dateDisplayFormatter.formatDate(date, inRegexp), expected
        );
      });

    it("Source date:" +
      '[' + date + ']; ' +
      "Input regex:" +
      '[' + inRegexp + ']; ' +
      "Output regex:" +
      '[' + outRegexp + ']; ' +
      'Result date:' +
      '[' + expectedWithOutRegExp + ']; ',
      function() {
        assert.equal(
          dateDisplayFormatter.formatDate(date, inRegexp, outRegexp), expectedWithOutRegExp
        );
      });
  });
});