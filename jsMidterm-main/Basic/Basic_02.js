

function highestDigit(num) {
    return Math.max(...String(num).split(''));
}
//หาตัวที่มากที่สุดใน()
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));