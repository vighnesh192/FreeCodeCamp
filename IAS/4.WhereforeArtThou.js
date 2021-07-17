function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    collection.forEach((el) => {
      let monitor = false;
      for(let key in source) {
        if(el.hasOwnProperty(key)) {
          if(el[key] === source[key]) monitor = true;
          else {
            monitor = false;
            break;
          }
        }
        else {
          monitor = false;
          break;
        }
      }
      if(monitor) arr.push(el);
    })
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });