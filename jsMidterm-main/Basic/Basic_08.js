
function simplePair(arr, mul) {
    const result = [];
    const check = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
                //เพื่อหลีกเลี่ยงการจับคู่ตัวเลขตัวเดียวกัน
            if (arr[i] * arr[j] === mul && arr[i] !== arr[j]) {
                check.push(arr[i], arr[j]);
            }
        }
    }

    if (check != '') {
        for (let i = 0; i < check.length; i += 2) {
            const pair = [check[i], check[i + 1]];
                //ใช้ตรวจสอบว่ามีสมาชิกใดใน result ตรงกับเงื่อนไขที่กำหนดหรือไม่
            if (!result.some(existing => existing.includes(pair[0]) && existing.includes(pair[1]))) { 
                result.push(pair);
            }
        } return result;
    }

    return null;
}
console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));
console.log(simplePair([2, 6, 3, 4], 12));
//การใช้ includes อาจไม่แม่นยำสำหรับกรณีที่มีตัวเลขซ้ำกันในอาร์เรย์
//ตัวอย่างเช่น [2, 2] กับ [2, 2] จะถือว่าเหมือนกันในกรณีนี้ เพราะ includes 
// ตรวจแค่ค่าที่อยู่ในอาร์เรย์เท่านั้น ไม่สนใจตำแหน่ง
