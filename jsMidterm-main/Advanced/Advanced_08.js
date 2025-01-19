//นับจำนวนสัตว์ที่สามารถสร้างได้จากตัวอักษรที่ให้มา (string input) โดยใช้ตัวอักษรในแต่ละคำได้เพียงครั้งเดียว
function count_animals(str) {
    const animals = ["dog", "cat", "bat", "cock", "cow", "pig", "fox", "ant", "bird", "lion", "wolf", "deer", "bear", "frog", "hen", "mole", "duck", "goat"];
    const charCount = {}; // นับจำนวนตัวอักษรในสตริง
    let maxCount = 0;

    // สร้างตัวนับจำนวนตัวอักษรในสตริง
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Recursive function เพื่อหาจำนวนสัตว์สูงสุด
    function findMaxAnimals(availableChars, currentCount) {
        let maxAnimals = currentCount;

        for (const animal of animals) {
            const charMap = {}; // นับจำนวนตัวอักษรในคำสัตว์
            let canForm = true;

            for (const char of animal) {
                charMap[char] = (charMap[char] || 0) + 1;
                if (charMap[char] > (availableChars[char] || 0)) {
                    canForm = false;
                    break;
                }
            }

            if (canForm) {
                // ถ้าสร้างสัตว์ได้ ลดจำนวนตัวอักษรจาก availableChars
                const newAvailableChars = { ...availableChars };
                for (const char of animal) {
                    newAvailableChars[char] -= 1;
                }

                // เรียกฟังก์ชันแบบ recursive
                maxAnimals = Math.max(maxAnimals, findMaxAnimals(newAvailableChars, currentCount + 1));
            }
        }

        return maxAnimals;
    }

    // เรียกฟังก์ชัน recursive เพื่อเริ่มต้นการคำนวณ
    maxCount = findMaxAnimals(charCount, 0);

    return maxCount;
}

// ทดสอบโค้ด
console.log(count_animals("goatcode")); // Output: 1 (goat)
console.log(count_animals("cockdogwdufrbir")); // Output: 3 (cock, dog, bird)
console.log(count_animals("dogdogdogdogdog")); // Output: 5 (dog, dog, dog, dog, dog)
