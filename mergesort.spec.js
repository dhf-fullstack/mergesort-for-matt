describe('Split Array function', function() {
  it('it is able to split an empty array', function() {
    expect(split([])).toEqual([]);
  });
  it('is able to split an single element array', function() {
    expect(split([10])).toEqual([[10], []]);
  });
  it('is able to split an even length array', function() {
    expect(split([10, 20])).toEqual([[10], [20]]);
  });
});
