//ฟังก์ชัน getBudgets ใช้สำหรับคำนวณผลรวมของงบประมาณ (budget) 
// จากอาร์เรย์ของอ็อบเจกต์ที่แสดงข้อมูลของแต่ละบุคคล


//สำหรับแต่ละ person (วัตถุที่แทนบุคคล) จะเข้าถึงคุณสมบัติ budget 
// และเพิ่มค่าเข้าไปใน totalBudget
function getBudgets(arr) {
    let totalBudget = 0;
    for (let person of arr) {
        totalBudget += person.budget; //sum from budget 
    }
    return totalBudget;
}

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));

console.log(getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]));

