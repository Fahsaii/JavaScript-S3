//หาคู่ตัวเลขสองตัวในอาร์เรย์ที่เมื่อคูณกันแล้วได้ค่าที่กำหนด (n) 
// และส่งคืนคู่ตัวเลขนั้นในรูปแบบอาร์เรย์ 

function simplePair(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] === n) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}
console.log(simplePair([1, 2, 3], 3)); 
console.log(simplePair([1, 2, 3], 6)); 
console.log(simplePair([1, 2, 3], 9)); 