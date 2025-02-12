

function numberSplit(num) {
    const result = [];

    if (num % 2 === 0) {    //ถ้าnum mod 2 = 0 จะเข้าไปทำใน if
        result.push(num/2);
        result.push(num/2);
    } else {                //ถ้ามีทศนิยิมจะมาทำที่ else
        result.push(Math.floor(num/2)); 
        result.push(Math.ceil(num/2)); 
    }

    return result;
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));