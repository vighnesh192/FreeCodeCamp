function chunkArrayInGroups(arr, size) {
    let varSize = size;
    const arrLength = arr.length;
    const givenSize = size;
    const loopLimit = (arrLength/givenSize % 1) == 0 ? Math.floor(arrLength/givenSize) : Math.floor(arrLength/givenSize) + 1
    let newArr = [];
    let j=0, k=0;
    for(let i=0; i<loopLimit; i++) {
      let tempArr = [];
      for(j; j<varSize; j++) {
        tempArr.push(arr[j]);
      }
      j += k;
      varSize += givenSize;
      if(varSize > arr.length) {
        varSize = arr.length;
      }
      newArr.push(tempArr);
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);