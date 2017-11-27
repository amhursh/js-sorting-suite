assert = require('chai').assert;
insertSort = require('../lib/insertion-sort');

describe("Insert Sort", function() {
  it("sorts an array in ascending order", function() {
    var input = [4,6,2,9,8,7,5,3,1];
    var expectedOutput = [1,2,3,4,5,6,7,8,9];

    assert.deepEqual(insertSort(input), expectedOutput);
  });
});