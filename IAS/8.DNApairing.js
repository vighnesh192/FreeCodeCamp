function pairElement(str) {
    let arr = [];
    for(let el of str) {
      if(el === 'A') {
        arr.push([el, 'T'])
      }
      if(el === 'T') {
        arr.push([el, 'A'])
      }
      if(el === 'C') {
        arr.push([el, 'G'])
      }
      if(el === 'G') {
        arr.push([el, 'C'])
      }
    }
    return arr;
  }
  
  pairElement("GCG");