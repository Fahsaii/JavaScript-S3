// เป็นฟังก์ชันที่ออกแบบมาเพื่อประมวลผลสตริง (str) ตามค่าที่กำหนด (number) และส่งคืนคำลับ ("secret word") ที่ได้จากกระบวนการเฉพาะ
function secretWord(str,number) {
    const word01 = []; //ใช้เก็บชุดข้อมูลแรกที่แบ่งออกมาจากสตริง
    const word02 = []; // ใช้เก็บชุดข้อมูลที่แบ่งออกมาหลังจากนั้น
    const divide = Math.floor(str.length / (number * 2)); //ใช้คำนวณจำนวนกลุ่มของตัวอักษรที่ต้องแบ่งโดยอ้างอิงจาก number

    //ใช้วนลูปแบ่งสตริงตามจำนวนตัวอักษร (number) และแปลงเป็นตัวพิมพ์เล็กทั้งหมดก่อนเก็บใน word01
    for (let i = 0; i < divide * number; i += number) {
        word01.push(str.substr(i, number).toLowerCase());
    }
    //ส่วนที่เหลือของสตริงจะแบ่งโดยใช้ number - 1 ตัวอักษรในแต่ละรอบ และเก็บไว้ใน word02
    for (let j = divide * number; j < str.length; j += number - 1) {
        word02.push(str.substr(j, number - 1).toLowerCase());
    }

    const checkW01 = word01;
    const checkW02 = [];

    for (let c = 1; c < word02.length; c++) {
        if (word02[c - 1].length === 2 && word02[c].length === 2) {
            checkW02.push(word01[c - 1][1] + word01[c - 1][2] + word02[c - 1][0]);
            checkW02.push(word02[c - 1][1] + word02[c]);
        } else {
            checkW02.push(word02[c - 1]);
        }
    } 
    //สร้างโดยดึงส่วนย่อย 3 ตัวอักษรจาก checkW01 และ checkW02
    const srw = checkW01.map(item => item.substr(number - 3, 3)).concat(checkW02.map(item => item.substr(0, 3)));
    // แปลงตัวอักษรใน srw เป็นค่าตัวเลขโดยใช้ตำแหน่งของตัวอักษรใน
    const ascii = srw.map(item => [...item].reduce((acc, curr) => acc + '/abcdefghijklmnopqrstuvwxyz'.indexOf(curr), 0));
    const difference = Math.abs(ascii[1] - ascii[0]);
    const result = [];

    for (let i = 0; i < ascii.length - 1; i++) {
        if (Math.abs(ascii[i] - ascii[i + 1]) === difference) {
            result.push(srw[i][1]);
        } else throw "Unable to find secret character value";
    }
    //หากพบว่าค่าความต่างเท่ากัน ให้ดึงตัวอักษรตรงกลาง ([1]) ของแต่ละกลุ่มมาใส่ใน result
    if (Math.abs(ascii[ascii.length - 2] - ascii[ascii.length - 1]) === difference) {
        result.push(srw[srw.length - 1][1]);
    } else throw "Unable to find secret character value";
    //รวมค่าตัวอักษรทั้งหมดใน result และคืนค่าเป็นคำลับ
    return result.join('');
}

console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)); 
console.log(secretWord("aheiayd", 3)); 