function split(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length % 2 === 0) {
    const firstHalf = arr.slice(0, arr.length / 2);
    const secondHalf = arr.slice(arr.length / 2);
    return [firstHalf, secondHalf];
  } else {
    const firstHalf = arr.slice(0, (arr.length + 1) / 2);
    const secondHalf = arr.slice((arr.length + 1) / 2);
    return [firstHalf, secondHalf];
  }
}

function merge(l, r) {
  let li = 0;
  let ri = 0;
  let result = [];
  while (li < l.length && ri < r.length) {
    if (l[li] < r[ri]) {
      result = result.concat(l[li++]);
    } else {
      result = result.concat(r[ri++]);
    }
  }
  if (li < l.length) {
    result = result.concat(l.slice(li));
  } else if (ri < r.length) {
    result = result.concat(r.slice(ri));
  }
  return result;
}

function mergesort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  console.log(`arr: ${arr}`)
  let splits = split(arr);
  console.log(`splits: ${splits}`)
  if  (splits.length === 0) {
    return [];
  }
  let [l, r] = splits;
  console.log(`before recursion l: ${l}, r: ${r}`)
  l = mergesort(l);
  r = mergesort(r);
  console.log(`after recursion l: ${l}, r: ${r}`)
  let result = merge(l,r);
  console.log(`after merge ${result}`)
  return result
}