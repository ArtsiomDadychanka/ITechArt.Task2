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

  describe("Chaining", function() {
    var date = '2013-04-30';
    var date1 = '2017-04-30';
    var date2 = '2017-06-31';
    var date3 = '2017-12-03';
    var date4 = '2017-12-30';
    var inRegexp = 'YYYY-MM-DD';
    var expected = '4 year ago';
    var expected1 = '7 month ago';
    var expected2 = '5 month ago';
    var expected3 = '23 days ago';
    var expected4 = '0 days ago';

    describe("fromNow test", function() {
      it("Source date:" +
        '[' + date + ']; ' +
        "Input regex:" +
        '[' + inRegexp + ']; ' +
        'Result date:' +
        '[' + expected + ']; ',
        function() {
          assert.equal(
            dateDisplayFormatter.formatDateWithConvertion(
              date, inRegexp
            ).fromNow(), expected);
        });
      it("Source date:" +
        '[' + date1 + ']; ' +
        "Input regex:" +
        '[' + inRegexp + ']; ' +
        'Result date:' +
        '[' + expected1 + ']; ',
        function() {
          assert.equal(
            dateDisplayFormatter.formatDateWithConvertion(
              date1, inRegexp
            ).fromNow(), expected1);
        });
      it("Source date:" +
        '[' + date2 + ']; ' +
        "Input regex:" +
        '[' + inRegexp + ']; ' +
        'Result date:' +
        '[' + expected2 + ']; ',
        function() {
          assert.equal(
            dateDisplayFormatter.formatDateWithConvertion(
              date2, inRegexp
            ).fromNow(), expected2);
        });
      it("Source date:" +
        '[' + date3 + ']; ' +
        "Input regex:" +
        '[' + inRegexp + ']; ' +
        'Result date:' +
        '[' + expected3 + ']; ',
        function() {
          assert.equal(
            dateDisplayFormatter.formatDateWithConvertion(
              date3, inRegexp
            ).fromNow(), expected3);
        });
      it("Source date:" +
        '[' + date4 + ']; ' +
        "Input regex:" +
        '[' + inRegexp + ']; ' +
        'Result date:' +
        '[' + expected4 + ']; ',
        function() {
          assert.equal(
            dateDisplayFormatter.formatDateWithConvertion(
              date4, inRegexp
            ).fromNow(), expected4);
        });
    });
  });
});