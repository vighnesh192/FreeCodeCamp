function spinalCase(str) {
  const charFilterRegex = /[^a-z^A-Z]/g;
  const wordSplitRegex = /\B[A-Z]/g;
  let newString = str.replace(charFilterRegex, " ");
  let arr = newString.match(wordSplitRegex);
  let result = ''
  if(arr) {
    let loopStr = newString
    arr.map((el) => {
      loopStr = loopStr.replace(el, ` ` + el)
    })
    loopStr = loopStr.toLowerCase();
    let strArr = loopStr.split(' ');
    result = strArr.join('-')
  }
  else {
    newString = newString.toLowerCase();
    let strArr = newString.split(' ');
    result = strArr.join('-')
  }

  return result;
}

spinalCase("thisIsSpinalTap");