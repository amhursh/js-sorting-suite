function insertSort(array) {
  var i, pos, val;
  for (i = 0; i < array.length; i++) {
    pos = i;
    val = array[i];
    while (pos > 0 && array[pos - 1] > val){
      array[pos] = array[pos - 1];
      pos--;
    }
    array[pos] = val;
  }
  return array;
}

module.exports = insertSort;