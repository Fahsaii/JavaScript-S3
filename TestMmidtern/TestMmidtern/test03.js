//ตัวอักษรตัวพิมพ์ใหญ่มาไว้ข้างหน้าตัวอักษรตัวพิมพ์เล็ก
function capToFront(k) {
    let upperCaseChars = k.split('').filter(char => char === char.toUpperCase());
    let lowerCaseChars = k.split('').filter(char => char === char.toLowerCase());
    return upperCaseChars.join('') + lowerCaseChars.join('');
}
  
  
  console.log(capToFront("hApPy")); 
  console.log(capToFront("moveMENT")); 
  console.log(capToFront("shOrtCAKE")); 