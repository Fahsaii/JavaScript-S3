//ที่เกี่ยวข้องกับการกระโดดบนอาร์เรย์ (array) เพื่อหาจำนวนครั้งที่น้อยที่สุดในการกระโดดไปถึงจุดสุดท้าย 
function jumpingProg(num,arr) {
    const stone = arr.length; //stone เก็บค่าความยาวของอาร์เรย์ arr
    const jump = new Array(stone+1).fill(Infinity);
    jump[0] = 1; //ตั้งค่า jump[0] = 1 เพื่อกำหนดว่าจุดเริ่มต้นต้องการ "หนึ่งครั้ง" ในการไปถึง
    
    for (let i = 0; i < stone; i++) { 
        for (let j = 1; j <= num && i + j <= stone; j++) {
            if (arr[i] === j) { 
                jump[i + j] = Math.min(jump[i + j], jump[i] + 1);
            } 
        }
    }
    //หากตำแหน่งสุดท้าย (jump[stone]) ยังคงเป็น Infinity หมายความว่าไม่สามารถไปถึงจุดนั้นได้ ให้คืนข้อความ "no chance :-("
    return jump[stone] === Infinity ? "no chance :-{" : jump[stone]; 
}

console.log(jumpingProg(5, [1, 1, 1, 1, 1])); 
console.log(jumpingProg(5, [1, 3, 1, 1, 1])); 
console.log(jumpingProg(5, [1, 1, 0, 1, 1]));