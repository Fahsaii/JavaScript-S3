//ตัวเลขที่มีค่ามากที่สุด
function highestDigit(number) {
                                            //.map(Number) แปลงตัวอักษรในอาร์เรย์กลับเป็นตัวเลข 
                                            // เช่น ["3", "7", "9"] → [3, 7, 9].
    const digits = String(number).split('').map(Number); 
    const maxDigit = Math.max(...digits); 
    return maxDigit;
}


console.log(highestDigit(379)); 
console.log(highestDigit(2));   
console.log(highestDigit(377401));