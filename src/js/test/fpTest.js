describe("FP tests", function() {


  describe("Partial application", function() {
    var sumOf2 = function(a, b) {
      return a + b;
    }
    var sumOf4 = function(a, b, c, d) {
      return a + b + c + d;
    }

    describe("partial application with 2 args", function() {
      it("Sum of 2, 2 + 3", function() {
        var sum2 = f(2, sumOf2);
        var expected = 5;

        assert.equal(sum2(3), expected);
      });
      it("Sum of 2, 3 + 7", function() {
        var sum3 = f(3, sumOf2);
        var expected = 10;

        assert.equal(sum3(7), expected);
      });
    });

    describe("partial application with 4 args", function() {
      var sum321 = f(3, 2, 1, sumOf4);
      var expected = 10;

      it("Sum of 4, 1+2+3+4", function() {
        assert.equal(sum321(4), expected);
      });

    });

  });

  describe("Currying", function() {
    var volume = function(l, w, h) {
      return l * w * h;
    }
    var expected = 24;
    var curried = curry(volume);

    it("Volume of 2*3*4 == 24", function() {
      assert.equal(curried(2)(3)(4), expected);
    });
  });

  describe("Linear fold", function() {
    var objs = [1, 3, 7, 5];
    console.log("LF START");
    console.log();
    var cb = function(last, current, idx, array) {
      console.log('l:' + last + ' c:' + current);
      return current;
    }

    lf(objs, cb);
    console.log("LF with initial value");
    lf(objs, cb, 144);
    console.log("LF END");
  });

  describe("Map", function() {
    var source = [1, 2, 3, 4, 5, 6];
    var expected = [2, 4, 6, 8, 10, 12];
    var double = function(num) {
      return num * 2;
    }

    it('Source: ' +
      '[' + source + '] ' +
      'after map, that multiply by 2; ' +
      'Expected: ' +
      '[' + expected + '] ',
      function() {
        assert.sameOrderedMembers(map(source, double), expected);
      });

  });

  describe("Filter", function() {
    var source = [1, 2, 3, 4, 7, 7, 5, 6];
    var expected = [2, 4, 6];
    var even = function(num) {
      return num % 2 === 0;
    }

    it('Source: ' +
      '[' + source + '] ' +
      'after filter, that keep even numbers; ' +
      'Expected: ' +
      '[' + expected + '] ',
      function() {
        assert.sameOrderedMembers(filter(source, even), expected);
      });

  });

  describe("Linear unfold", function() {
    var expected = [2, 4, 8, 16];
    var init = 1;

    var cb = function(state) {
      if (state >= 5) {
        return null;
      }
      var result = Math.pow(2, state);

      return [result, state + 1];
    };

    it('Init:1 ' +
      'after unfold, that raise to a power 2; ' +
      'Expected: ' +
      '[' + expected + '] ',
      function() {
        assert.sameOrderedMembers(lu(cb, init), expected);
      });
  });

  describe("Average of even numbers", function() {
    var source = [1, 23, 2, 6, 12, 0];
    var expected = 5;
    var even = function(num) {
      return num % 2 === 0;
    }
    var quarter = function(lastResult, element) {
      return lastResult + (element / 4);
    }

    it('Source: ' +
      '[' + source + '] ' +
      'after filter and mapping; ' +
      'Expected: ' +
      '[' + expected + '] ',
      function() {
        var filteredArr = filter(source, even);

        assert.equal(lf(filteredArr, quarter, 0), expected);
      });
  });

  describe("Sum of random numbers", function() {
    var init = 1;
    var rand = function(state) {
      var min = 0,
        max = 10;
      if (state >= 10) {
        return null;
      }
      var result = Math.floor(Math.random() * (max - min + 1)) + min;

      return [result, state + 1];
    }
    var sum = function(lastResult, element) {
      return lastResult + element;
    }
    var add = function(a, b) {
      return a + b;
    }
    var randoms = lu(rand, 0);
    var expected = randoms.reduce(add);

    it('Source: ' +
      '[' + randoms + '] ' +
      'after filter and mapping; ' +
      'Expected: ' +
      '[' + expected + '] ',
      function() {
        assert.equal(lf(randoms, sum), expected);
      });

  });

  describe("First", function() {
    var source = [1, 3, 12, 0, 14];
    var moreThan5 = function(num) {
      return num > 5;
    }
    var expected = 12;

    it('Source: ' +
      '[' + source + '] ' +
      'get num more than 5; ' +
      'Expected: ' + expected,
      function() {
        assert.equal(first(source, moreThan5), expected);
      });

  });

  describe("Memoization", function() {

  });
});