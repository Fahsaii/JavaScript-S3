

function capToFront(str) {
    const upper = []; //ตัวอักษรพิมพ์ใหญ่
    const lower = []; //ตัวอักษรพิมพ์เล็ก

    for (const char of str) {
        if (char === char.toUpperCase()) { //ตรวจสอบว่า char เป็นตัวอักษรพิมพ์ใหญ่หรือไม่ โดยเปรียบเทียบค่าของ char กับ char.toUpperCase() ซึ่งแปลง char ให้เป็นตัวพิมพ์ใหญ่
            upper.push(char); //หากตัวอักษรเป็นตัวพิมพ์ใหญ่ จะเพิ่มตัวอักษรนั้นลงในอาเรย์
        } else lower.push(char); //หากตัวอักษรไม่ใช่ตัวพิมพ์ใหญ่ จะเพิ่มตัวอักษรลงในอาเรย์ lower
    }

                //.join('')เพื่อรวมตัวอักษรในอาเรย์ตัว
    const result = upper.join('') + lower.join('');
    return result;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));