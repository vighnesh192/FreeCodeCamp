function fearNotLetter(str) {
    let j = 0;
    for(let i=str.charCodeAt(0); i<=str.charCodeAt(str.length-1); i++) {
      if(str[j] != String.fromCharCode(i)) {
        return String.fromCharCode(i);
      }
      j++;
    }
  }
  
  fearNotLetter("abce");