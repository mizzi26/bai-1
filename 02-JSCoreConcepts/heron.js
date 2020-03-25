// boki trójkąta
let a = 3;
b = 4;
c = 5;
h = 7

var p = (a + b + c)/2;

var wynik = Math.sqrt(p*(p-a)*(p-b)*(p-c));

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${wynik}`);