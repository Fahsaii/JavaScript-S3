let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

const commonElement = [];

for (let i=0; i < values1.length; i++ ); {
    const array = values1[i];

    if (values2.includes(array) && values3.includes(array)){
        commonElement.push(array);
    }

}
console.log(commonElement);