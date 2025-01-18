//ฟังก์ชัน isValidIP ใช้สำหรับตรวจสอบว่า str เป็น IP address 
// ที่ถูกต้องในรูปแบบ IPv4 หรือไม่ 

function isValidIP(str) {
    const parts = str.split(".");
    if (parts.length !== 4) //ตรวจสอบว่าจำนวนส่วนที่ได้ต้องมี 4 ส่วนเท่านั้น 
                            //(ถ้าไม่ใช่ ส่งคืน false)
    return false;

    for (let part of parts) {
        if (!/^\d+$/.test(part)) return false; // ตรวจสอบว่าเป็นตัวเลข
        const number = parseInt(part, 10);
        if (isNaN(number) || number < 0 || number > 255) return false; // ตรวจสอบช่วงของตัวเลข
        if (part.length > 1 && part.startsWith("0")) return false; // ตรวจสอบเลขนำหน้า 0
    }
    return true;
}


console.log(isValidIP("1.2.3.4")); 
console.log(isValidIP("1.2.3")); 
console.log(isValidIP("1.2.3.4.5")); 
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90")); 
console.log(isValidIP("123.045.067.089")); 

//0,255