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

  describe("Linear unfold", function() {
    var expected;
    var init;
    console.log("LU START");
    console.log();
    var cb = function() {

    };
    lu(cb, init);
    console.log("LU END");
  });

  describe
});