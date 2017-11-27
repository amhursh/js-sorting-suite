function bubbleSort(arr) {
  var i, j, limit;
  limit = arr.length; 
  while(limit--) {
    for(i = 0, j = 1; i < limit; i++, j++) {
      if(arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;