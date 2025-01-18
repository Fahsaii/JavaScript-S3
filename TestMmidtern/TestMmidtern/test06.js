
//removeDups ที่ทำหน้าที่ลบค่า ซ้ำ ออกจากอาร์เรย์ 

function removeDups(items) {
    //ตัวแปร seen เป็น Set ที่จะใช้เก็บค่าที่พบในอาร์เรย์
    let seen = new Set();
    //ฟังก์ชัน filter จะวนซ้ำอาร์เรย์ items และสร้างอาร์เรย์ใหม่ 
    // โดยจะเก็บเฉพาะค่าที่ไม่เคยเจอมาก่อน 
    return items.filter(item => {
        if (!seen.has(item)) {
            seen.add(item);
            //ส่งคืน true เพื่อให้ filter เก็บค่านี้
            return true;
        }
        //ถ้าค่า อยู่ใน seen แล้ว: ส่งคืน false เพื่อให้ filter ลบค่านั้น
        return false;
    });
}


console.log(removeDups([1, 0, 1, 0])); 
console.log(removeDups(["The", "big", "cat"])); 
console.log(removeDups(["John", "Taylor", "John"])); 