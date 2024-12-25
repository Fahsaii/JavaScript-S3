const array0FNumber = [1,2,3,4];

                                //ตัวรวมค่า       //
const sum = array0FNumber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);   //10