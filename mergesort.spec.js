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

describe('Merge two sorted array', function() {
  it('it is able to merge two empty arrays', function() {
    expect(merge([],[])).toEqual([]);
  })
  it('it is able to merge one non-empty with one empty array', function() {
    expect(merge([1],[])).toEqual([1]);
  })
  it('it is able to merge two non-empty arrays', function() {
    expect(merge([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
  })
})
describe('Merge Sort an array', function() {
  it('it is able to sort an empty array', function() {
    expect(mergesort([])).toEqual([]);
  })
  it('it is able to merge a singleton array', function() {
    expect(mergesort([1])).toEqual([1]);
  })
  it('it is able to merge a sorted array', function() {
    expect(mergesort([1,2,3])).toEqual([1,2,3]);
  })
  it('it is able to merge a silly array', function() {
    expect(mergesort([2,1,-19,3,4])).toEqual([-19,1,2,3,4]);
  })
  it('it is able to merge a crazy array', function() {
    expect(mergesort([-19, 27, 1 , 2, 45, 282, 7, 79, 134])).toEqual([-19, 1, 2, 7, 27, 45, 79, 134, 282]);
  })
})
