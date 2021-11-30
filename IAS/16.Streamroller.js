function steamrollArray(arr) {
    let newArr = []
    return flatten(arr, newArr);
}

function flatten(arr, newArr) {
    arr.map((el) => {
        if(Array.isArray(el)) {
        flatten(el, newArr)
        }
        else {
        newArr.push(el);
        }
    });  
    return newArr; 
}

steamrollArray([1, [2], [3, [[4]]]]);