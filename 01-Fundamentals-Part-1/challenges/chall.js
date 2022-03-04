// * Challenge 1,2

/*
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;


let markBMI1 = markMass1/markHeight1**2;
let johnBMI1 = johnMass1/johnHeight1**2;

let markBMI2 = markMass2/markHeight2**2;
let johnBMI2 = johnMass2/johnHeight2**2;

let markHigherBMI=markBMI1 > johnBMI1;

if (markBMI1 > johnBMI1) {
    console.log(`Mark BMI = ${markBMI1} lebih tinggi dari John = ${johnBMI1} `);
} else {
    console.log(`John BMI = ${johnBMI1} lebih tinggi dari Mark = ${markBMI1} `);
}
*/

// * Challenge 3
/*
console.log("No 1");
dol = (96+108+89)/3;
koa = (88+91+110)/3;
console.log(`AVG DOL: ${dol} --- AVG koa: ${koa}`);

console.log("No 2");
if (dol == koa ) {
    console.log("Draw");
} else if(dol>koa) {
    console.log("Dol Wins");
}else{
    console.log("Koa Wins");
}

console.log("No 3");
dol1 = (97+112+101)/3;
koa1 = (109+95+123)/3;
console.log(`AVG DOL 1: ${dol1} --- AVG koa 1: ${koa1}`);
if ((dol1 || koa1) >= 100 ) {
    if (dol1>koa1) {
        console.log('Yang menang dol1');
    } else if (dol1<koa1) {
        console.log('Yang menang koa1');
    }
} else {
    console.log('Nilai harus minim 100');
}

console.log('NO 4');
dol2 = (97+112+101)/3;
koa2 = (109+95+106)/3;
console.log(`AVG DOL 2: ${dol2} --- AVG koa 2: ${koa2}`);
if (dol2 || koa2 >= 100) {
    if (dol2 > koa2) {
			console.log("Yang menang dol2");
		}else if(dol2 === koa2){
            console.log("Nilai Draw");
        } 
        else {
			console.log("Yang menang koa2");
		}
} else {
    console.log("Nilai tidak mencukupi 100");
}
*/

// * Challenge 4

const bill = 40;
const tip = bill>50 && bill<300 ? 15/100*bill : 20/100*bill;
console.log(`The bill was ${bill}, the tip ws ${tip} and Total is ${bill+tip}`);
