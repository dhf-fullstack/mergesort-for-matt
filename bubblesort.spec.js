describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('is a function', function() {
    expect(typeof bubbleSort).toBe('function');
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an single item array', function() {
    expect(Array.isArray(bubbleSort([18]))).toEqual(true);
  });
  it('handles an multiple item array', function() {
    expect(bubbleSort([2, 6, 1, 9])).toEqual([1, 2, 6, 9]);
  });
  it('handles an large multiple item array', function() {
    expect(bubbleSort([9, 7, 5, 3, 1, 2, 4, 6, 8])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
  it('calls swap correct number of times', function() {
    window.bubbleSort([18, 23]);
    expect(window.swap.calls.count()).toEqual(0);
  });
});
