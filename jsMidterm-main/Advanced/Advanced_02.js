//frequencySort ที่ใช้สำหรับเรียงลำดับตัวอักษรในสตริงตามความถี่ในการปรากฏ โดยตัวอักษรที่ปรากฏบ่อยที่สุดจะอยู่ข้างหน้าสุด 
// และตัวอักษรที่ปรากฏน้อยกว่าจะอยู่ถัดไป หากตัวอักษรมีความถี่เท่ากันจะเรียงตามลำดับ ASCII

function frequencySort(str) {
    const obj = [];
                                //แปลงตัวอักษรในอาร์เรย์ให้เป็นรหัส ASCII 
    const arrStr = str.split('').map(m => m.charCodeAt()).sort((a, b) => a - b);
                                                        //เรียงลำดับค่า ASCII จากน้อยไปมาก

    //ใช้ลูปเพื่อไล่ตรวจสอบว่าค่า ASCII ในอาร์เรย์ (arrStr) ซ้ำกันกี่ครั้ง 
    //ถ้าค่าถัดไป (arrStr[i]) เท่ากับค่าปัจจุบัน (arrStr[i - 1]): เพิ่ม currentCount
    //ถ้าไม่เท่ากัน: บันทึกค่าความถี่ (loop) และค่า ASCII (ascii) ลงในออบเจ็กต์ test แล้วใส่ในอาร์เรย์ obj และรีเซ็ต currentCount กลับเป็น 1
    let currentCount = 1; 
    for (let i = 1; i <= arrStr.length; i++) { 
        if (arrStr[i] === arrStr[i - 1]) { 
            currentCount++; 
        } else {
            const test = {
                loop: currentCount,
                ascii: arrStr[i - 1]
            }
            obj.push(test);
            currentCount = 1; 
        }
    }

    //เรียงลำดับข้อมูลใน obj จากมากไปน้อยตามค่า loop
    const result = obj.sort((a, b) => b.loop - a.loop).flatMap(entry => Array(entry.loop).fill(entry.ascii)).filter(value => value);
    
    //ใช้ String.fromCharCode แปลงค่า ASCII กลับเป็นตัวอักษร
    //ใช้ .join('') รวมตัวอักษรทั้งหมดเป็นสตริงเดียว
    return Array.from(result, charCode => String.fromCharCode(charCode)).join('');
}

console.log(frequencySort("tree"));  
console.log(frequencySort("cccaaa"));  
console.log(frequencySort("Aabb")); 

//map(): ใช้สำหรับเปลี่ยนแปลงข้อมูลในอาร์เรย์ โดยจะสร้างอาร์เรย์ใหม่ที่มีข้อมูลเปลี่ยนแปลงจากอาร์เรย์เดิม
//flat(): ใช้สำหรับแบนอาร์เรย์ย่อยที่ซ้อนอยู่ในอาร์เรย์ให้อยู่ในระดับเดียวกัน
//flatMap() ทำทั้งสองสิ่งนี้ในขั้นตอนเดียว