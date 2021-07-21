function myReplace(str, before, after) {
    const regex = new RegExp(before)
    const testForUppercase = before.match(/\b[A-Z]/)
    if(testForUppercase) {
      after = after[0].toUpperCase() + after.slice(1);
    }
    else {
      after = after[0].toLowerCase() + after.slice(1);
    }
    str = str.replace(regex, after);
    return str;
  }
  
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");