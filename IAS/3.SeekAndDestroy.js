function destroyer(arr) {
    let argsArr = [...arguments];
    let newArr = arr.filter(el => !argsArr.includes(el));
    return newArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);