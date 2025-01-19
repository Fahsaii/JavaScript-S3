
function numberSplit(num) {
                //ปัดเศษลง             //ปัดเศษขึ้น
    return [Math.floor(num / 2), Math.ceil(num / 2)];
  }
  
  console.log(numberSplit(4)); 
  console.log(numberSplit(10));  
  console.log(numberSplit(11));  
  console.log(numberSplit(-9));  

  