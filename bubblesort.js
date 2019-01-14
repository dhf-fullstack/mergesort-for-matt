function swap(arr, idx) {
  if (arr[idx] > arr[idx + 1]) {
    let temp = arr[idx];
    arr[idx] = arr[idx + 1];
    arr[idx + 1] = temp;
  }
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      swap(arr, j);
    }
  }
  return arr;
}
