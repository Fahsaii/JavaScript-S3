//หาผลรวมของตัวเลขที่มีค่าน้อยที่สุด 2 ค่าในอาร์เรย์ 
// โดยตัวเลขต้องเป็นบวก

function sumTwoSmallestNums(arr) {
                    //filter เพื่อลบค่าที่เป็นลบหรือศูนย์ออกจากอาร์เรย์
                                                    //ใช้ sort เพื่อเรียงลำดับตัวเลขในอาร์เรย์จากน้อยไปมาก
    const result = arr.filter(number => number > 0).sort((a, b) => a - b);

    return result[0] + result[1];
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); //2+5
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); //10+3453445
console.log(sumTwoSmallestNums([2, 9, 6, -1])); //6+2
console.log(sumTwoSmallestNums([1879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); //221+342
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); //1617+2902
