//canMove ที่ใช้เพื่อตรวจสอบว่าหมากรุกประเภทที่ระบุ (piece) สามารถเคลื่อนที่จากตำแหน่งหนึ่ง (fromSquare) 
// ไปยังอีกตำแหน่งหนึ่ง (toSquare) ได้หรือไม่ ตามกฎการเล่นหมากรุก
function canMove(piece,fromSquare,toSquare) {
    const file = [];
    const rank = [];
    const bool = [];

    //ตรวจสอบว่าตำแหน่งเริ่มต้น (fromSquare) และตำแหน่งเป้าหมาย (toSquare) ไม่เหมือนกัน
    if (fromSquare != toSquare) {
        const square = [fromSquare,toSquare]; 

        for (let i = 0; i < square.length; i++) {
            file.push(square[i].charAt(0).toLowerCase()); 
            rank.push(parseInt(square[i].charAt(1))); 
            
            //locationChar คืออาร์เรย์ที่ใช้ระบุว่าไฟล์ (แนวนอน เช่น a, b, c) ของหมากรุกต้องอยู่ในช่วงระหว่าง a ถึง h
            const locationChar = ['a','b','c','d','e','f','g','h']; 
            bool.push(locationChar.includes(file[i]) && (rank[i] >= 1 && rank[i] <= 8)); 
        }
    }

    //คำนวณความต่างระหว่างตำแหน่งไฟล์ของตำแหน่งเริ่มต้น (fromSquare) และตำแหน่งเป้าหมาย (toSquare) 
    // โดยใช้รหัส ASCII
    const ascii = Math.abs(file[0].charCodeAt(0) - file[1].charCodeAt(0)); 
    //คำนวณความต่างระหว่างตำแหน่งแรงค์
    const number = Math.abs(rank[0] - rank[1]); 
    // ใช้ตรวจสอบว่าทั้งตำแหน่งเริ่มต้นและตำแหน่งเป้าหมายอยู่ในขอบเขตของกระดานหมากรุกหรือไม่
    const correct = bool[0] === true && bool[1] === true; 

    while (correct) {
        switch (piece.toLowerCase()) {
            case 'pawn':
                return ascii === 0 && number === 1 && rank[0] < rank[1];
            case 'knight':
                return (ascii !== 0 && number !== 0) && (ascii === 1 && number === 2) || (ascii === 2 && number === 1);
            case 'bishop':
                return ascii === number;
            case 'rook': 
                return ascii === 0 || number === 0;
            case 'queen':
                return ascii === number || ascii === 0 || number === 0;
            case 'king':
                return (ascii === 0 && number === 1) || (number === 0 && ascii === 1) || (ascii === 1 && number === 1);
            default: 
                return false;
        }
    }

    return false;
}

console.log(canMove("Rook","A8","H8"));
console.log(canMove("Bishop","D4","G1"));
console.log(canMove("Queen","C4","D6"));
console.log(canMove("Pawn","C4","C5"));
console.log(canMove("Knight","D4","F6"));
console.log(canMove("King","F5","D3"));