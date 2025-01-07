
function totalVolume(...arr) {
                //ช้ arr.reduce() เพื่อวนลูปผ่านแต่ละอาเรย์ย่อย (แต่ละกล่อง) ใน arr
    const result = arr.reduce((acc,cer) => {
        const arrIn = cer.reduce((acc,cer) => acc * cer, 1);
        return acc + arrIn;
    }, 0);
    return result;
}
                        //array เเต่ละตัวเปรียนเสมือนกล่อง
                        //ความยาว × ความกว้าง × ความสูง
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));