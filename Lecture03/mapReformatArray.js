const kvArray = [
    { key: 1, value: 10},
    { key: 2, value: 20},
    { key: 3, value: 30},
];
                                                        //ค่าของหนึ่งเเละค่าของvalue
const reformattedArray = kvArray.map(({key,value}) => ({[key]: value}));

console.log(reformattedArray); //[{1:10}, {2:20}, {3:3}]
console.log(kvArray);