var numbersArray = new Array(10);
var min = 5;
var max = 20;
let funcRan = () => Math.floor(Math.random() * (max - min + 1) ) + min; 

var i;
for(i = 0; i< numbersArray.length; i++)
{
  numbersArray[i] = funcRan();
}

numbersArray.forEach(item => console.log(item))