describe("Caching calculator", function() {
  it("Test operations", function() {
    console.log("WITHOUT CACHING");
    var result = cachingCalculator.add(2, 3);
    result = cachingCalculator.add(2, 3);

    result = cachingCalculator.sub(2, 3);
    result = cachingCalculator.sub(2, 3);

    result = cachingCalculator.div(2, 2);
    result = cachingCalculator.div(2, 2);

    result = cachingCalculator.mult(2, 2);
    result = cachingCalculator.mult(2, 2);
    console.log("Define addition as caching operation");
    cachingCalculator.cache.defineCachedOperation(cachingCalculator._operations.add);
    console.log("Calling same methods and result will be taking from cache");
    result = cachingCalculator.add(2, 2);
    result = cachingCalculator.add(2, 2);
    console.log("Set max size of cache 2");
    cachingCalculator.cache.setMaxCacheSize(2);
    result = cachingCalculator.add(2, 3);
    result = cachingCalculator.add(2, 3);
    console.log("There are cache is full");
    result = cachingCalculator.add(2, 4);
    result = cachingCalculator.add(2, 4);

  });
});