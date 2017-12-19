describe("String calculator", function() {

  describe("Integers", function() {
    var a = '10',
      b = '10';

    it(a + '+' + b + '=' + (+a + +b), function() {
      assert.equal(stringCalculator.add(a, b), 20);
    });
    it(a + '/' + b + '=' + (a / b), function() {
      assert.equal(stringCalculator.div(a, b), 1);
    });
    it(a + '*' + b + '=' + (a * b), function() {
      assert.equal(stringCalculator.mult(a, b), 100);
    });
    it(a + '-' + b + '=' + (+a - +b), function() {
      assert.equal(stringCalculator.sub(a, b), 0);
    });
  });

  describe("Zeros", function() {
    var a = '0',
      b = '0';

    it(a + '+' + b + '=' + (+a + +b), function() {
      assert.equal(stringCalculator.add(a, b), 0);
    });
    it(a + '/' + b + '=' + (a / b), function() {
      assert.isTrue(isNaN(stringCalculator.div(a, b)));
    });
    it(a + '*' + b + '=' + (a * b), function() {
      assert.equal(stringCalculator.mult(a, b), 0);
    });
    it(a + '-' + b + '=' + (+a - +b), function() {
      assert.equal(stringCalculator.sub(a, b), 0);
    });
  });

  describe("Real numbers", function() {
    var a = '0.1',
      b = '0.2';

    it(a + '+' + b + '=' + (+a + +b).toFixed(3), function() {
      assert.equal(stringCalculator.add(a, b).toFixed(3), 0.3);
    });
    it(a + '/' + b + '=' + (a / b).toFixed(3), function() {
      assert.equal(stringCalculator.div(a, b).toFixed(3), 0.5);
    });
    it(a + '*' + b + '=' + (a * b).toFixed(3), function() {
      assert.equal(stringCalculator.mult(a, b).toFixed(3), 0.02);
    });
    it(a + '-' + b + '=' + (+a - +b).toFixed(3), function() {
      assert.equal(stringCalculator.sub(a, b).toFixed(3), -0.1);
    });
  });

  describe("Invalid strings", function() {
    var a = 'cat',
      b = 0;

    it(a + '+' + b + '=' + 'null', function() {
      assert.isNull(stringCalculator.add(a, b));
    });
    it(a + '/' + b + '=' + 'null', function() {
      assert.isNull(stringCalculator.div(a, b));
    });
    it(a + '*' + b + '=' + 'null', function() {
      assert.isNull(stringCalculator.mult(a, b));
    });
    it(a + '-' + b + '=' + 'null', function() {
      assert.isNull(stringCalculator.sub(a, b));
    });
  });
});