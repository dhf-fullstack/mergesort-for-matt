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
