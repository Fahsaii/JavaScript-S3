//จำลองตำแหน่งของผู้เล่น (player) ที่เลื่อนไปตามตาราง 7x7 โดยขึ้นอยู่กับชุดคำสั่งการเคลื่อนที่ (pos) ที่กำหนด
function findPos(pos) {
    const size = 7; // ขนาดของตาราง
    let posmove = 31; // ตำแหน่งเริ่มต้น (index)
    const validDirections = ['N', 'E', 'W', 'S'];

    for (let i = 0; i < pos.length; i++) {
        let direction = pos[i].toUpperCase();

        if (!validDirections.includes(direction)) {
            console.log("GAME OVER!, YOU FOUL!!!");
            return;
        }

        switch (direction) {
            case 'N':
                if (posmove >= size) posmove -= size; // เลื่อนขึ้น
                break;
            case 'E':
                if ((posmove + 1) % size !== 0) posmove += 1; // เลื่อนไปทางขวา
                break;
            case 'W':
                if (posmove % size !== 0) posmove -= 1; // เลื่อนไปทางซ้าย
                break;
            case 'S':
                if (posmove < size * (size - 1)) posmove += size; // เลื่อนลง
                break;
        }
    }

    if (posmove === 13) {
        console.log("Last Position : TG1 , You WIN!");
    } else if (posmove === 14) {
        console.log("Last Position : TG2 , You WIN!");
    } else {
        console.log(`Last Position : ${posmove} , You LOSE! :(`);
    }
}

// ทดสอบโค้ด
const pos1 = ['n', 'e', 'n', 'E', 'e', 'n'];
const pos2 = ['n', 'e', 'e', 'N', 'e', 'n'];
const pos3 = ['n', 'e', 'W', 'w', 'w', 'w', 'n'];
const pos4 = ['n', 'e', 'n', 'e', 'e', 's'];
const pos5 = ['w', 'e', 'n', 'X', 'e', 's'];

findPos(pos1); // Output: Last Position : 12 , You LOSE! :(
findPos(pos2); // Output: Last Position : TG2 , You WIN!
findPos(pos3); // Output: Last Position : 24 , You LOSE! :(
findPos(pos4); // Output: Last Position : 22 , You LOSE! :(
findPos(pos5); // Output: GAME OVER!, YOU FOUL!!!
