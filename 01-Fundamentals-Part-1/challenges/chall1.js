let markMass1 = 78;
let markMass2 = 95;
let markHeight1 = 1.69;
let markHeight2 = 1.88;
let johnMass1 = 92;
let johnMass2 = 85;
let johnHeight1 = 1.95;
let johnHeight2 = 1.76;


let markBMI1 = markMass1/markHeight1**2;
let markBMI2 = markMass2/markHeight2**2;

let johnBMI1 = johnMass1/johnHeight1**2;
let johnBMI2 = johnMass2/johnHeight2**2;

let markHigherBMI=markBMI1 > johnBMI1;


console.log(markBMI1);
console.log(johnBMI1);
console.log(markHigherBMI);

console.log(markBMI2);
console.log(johnBMI2);