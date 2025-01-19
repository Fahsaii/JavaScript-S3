//ใช้สำหรับตรวจสอบว่า สตริงตัวเลข (string of digits) เป็น "Additive Number Sequence
//ลำดับของตัวเลขที่ตัวเลขถัดไปในลำดับมีค่าเท่ากับผลรวมของตัวเลขสองตัวก่อนหน้า
function isAdditive(str) {

    function checkAdditive(num1, num2, remaining) {
        if (remaining.length === 0) return true;

        const sum = num1 + num2; 
        const sumStr = sum.toString(); 

                    //ช้เพื่อตรวจสอบว่าสตริงเริ่มต้นด้วยข้อความที่ระบุหรือไม่
        if (!remaining.startsWith(sumStr)) return false;
        
        return checkAdditive(num2, sum, remaining.substring(sumStr.length));
    }

    for (let i = 1; i < str.length; i++) { 
        for (let j = i + 1; j < str.length; j++) { 
            const num1 = parseInt(str.substring(0, i)); 
            const num2 = parseInt(str.substring(i, j)); 
            const remaining = str.substring(j); 
            
            if (checkAdditive(num1, num2, remaining)) return true;
        }
    }
    
    return false;
}

console.log(isAdditive("112358")); 
console.log(isAdditive("129881000")); 
console.log(isAdditive("12988110101891")); 
console.log(isAdditive("123456789")); 
console.log(isAdditive("300045007500")); 

//ตัวเลข: 1, 1, 2, 3, 5, 8
//ลำดับ: 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
//ผลลัพธ์: true (เป็น Additive Sequence)
