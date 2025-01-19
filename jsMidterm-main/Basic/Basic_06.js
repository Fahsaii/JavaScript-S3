// Apiwat Ketsawong

function removeDups(arr) {

    const result = arr.filter((value,index,self) => {
                    //self.indexOf(value) คืนค่าตำแหน่งแรกที่พบค่า value ในอาเรย์ 
                    // ค่าที่พบซ้ำจะถูกกรองออก
        return self.indexOf(value) === index;

    }) 
    return result;
}
//ไม่เอาตัวซ้ำ
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));