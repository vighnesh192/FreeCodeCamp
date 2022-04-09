function convertToRoman(num) {
    const roman = { 1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M" }

    let arr = [];

    while (Math.trunc(num) > 0) {
        arr.unshift(num % 10);
        num = Math.trunc(num / 10);
    }

    let count = arr.length - 1;

    let str = ""
    let key;
    for (let val of arr) {
        let multiplier = Math.pow(10, count);
        if (val <= 3) {
            while (val-- >= 1) {
                str += roman[multiplier];
            }
        }
        else if (val < 5) {
            str += roman[multiplier];
            key = multiplier * (val + 1);
            str += roman[key];
        }
        else {
            if (val == 5) {
                key = multiplier * val;
                str += roman[key];
            }
            else {
                if (val == 9) {
                    key = 1 * multiplier;
                    str += roman[key];
                    key = val * multiplier + 1 * multiplier;
                    str += roman[key];
                }
                else {
                    key = 5 * multiplier;
                    str += roman[key];

                    while (val-- >= 6) {
                        str += roman[multiplier];
                    }
                }
            }

        }
        count--;
    }

    return str;
}

console.log(convertToRoman(388));