//ใช้สำหรับแปลงจำนวนวินาทีที่ได้รับมาเป็นรูปแบบของเวลาแบบดิจิทัล 
// HH:MM:SS
//คำนวณชั่วโมง (hours) โดยการหารจำนวนวินาทีทั้งหมดด้วย 
// 3600 (จำนวนวินาทีใน 1 ชั่วโมง) 

function digitalClock(seconds) {
    // mod 24 เพื่อให้เวลาอยู่ในรูปแบบนาฬิกา 24 ชั่วโมง
    let hours = Math.floor(seconds / 3600) % 24; 
    //คำนวณนาที (minutes) โดยการหารเศษที่เหลือจาก
    // การหารจำนวนวินาทีด้วย 3600 ออกด้วย 60
    let minutes = Math.floor(seconds % 3600 / 60); 
    //คำนวณวินาที (seconds) โดยหาค่าเศษที่เหลือจาก
    // การหารจำนวนวินาทีด้วย 60
    let secs = seconds % 60; 

    //จัดรูปแบบตัวเลขให้อยู่ในรูปแบบ 2 หลักเสมอ (เช่น 01 แทน 1) 
    // โดยใช้ toString().padStart(2, '0'):
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = secs.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
console.log(digitalClock(5025)); //01:23:45
console.log(digitalClock(61201)); //17:00:01 
console.log(digitalClock(87000)); //00:10:00



