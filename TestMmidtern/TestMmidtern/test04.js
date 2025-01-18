//EX
//function sum(...args) {
    //let sum = 0;
    //for (let arg of args) sum += arg;
    //return sum;
//}

//let x = sum(4, 9, 25, 29, 100, 66, 77);
//console.log(sum)

function totalVolume(...boxes) {
    let total = 0;
    for (let box of boxes) {
        total += box[0] * box[1] * box[2]; 
    }
    return total;
}

//[length, width, height] หาผลรวมของปริมาตร
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); 
console.log(totalVolume([2, 2, 2], [2, 1, 1])); 
console.log(totalVolume([1, 1, 1])); 