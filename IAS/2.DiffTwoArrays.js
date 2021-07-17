function diffArray(arr1, arr2) {
  var newArr = [];
  if(JSON.stringify(arr1) != JSON.stringify(arr2)) {
    if(arr1.length == 0 || arr2.length == 0) {
      if(arr1.length == 0) {
        return arr2;
      }
      else {
        return arr1;
      }
    }
    for(let i=0; i<arr1.length; i++) {
      let monitor = true;
      for(let j=0; j<arr2.length; j++) {
        if(arr1[i] != arr2[j]) {
          monitor = false;
        }
        else {
          monitor = true;
          break;
        }
      }
      if(!monitor) {
        newArr.push(arr1[i])
      }
    }
    
    
    for(
        let i=0;
        i<arr2.length;
        i++
      ) {
      let monitor = true;
      for(
          let j=0;
          j<arr1.length; 
          j++
        ) {
        if(arr2[i] != arr1[j]) {
          monitor = false;
        }
        else {
          monitor = true;
          break;
        }
      }
      if(!monitor) {
        newArr.push(arr2[i])
      }
    }
    console.log(newArr)
    return newArr;
  }
  return [];
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);