
function getBudgets(obj) {
    //ใช้ map เพื่อสร้างอาร์เรย์ใหม่ที่มีเฉพาะค่าของ budget จากแต่ละอ็อบเจ็กต์
    return obj.map(m => m.budget).reduce((acc,cer) => acc + cer,0);
    //ใช้ reduce เพื่อหาผลรวมของอาร์เรย์ budget
    //acc คือ accumulator ที่สะสมผลรวม
    //cer คือค่าของแต่ละ budget ในอาร์เรย์
}

console.log(getBudgets([
    //23000+40000+2700=65700
    {name: "John", age: 21, budget: 23000},
    {name: "Steve", age: 32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700},
]));
console.log(getBudgets([
    //29000+32000+1600=62600
    {name: "John", age: 21, budget: 29000},
    {name: "Steve", age: 32, budget: 32000},
    {name: "Martin", age: 16, budget: 1600},
]));