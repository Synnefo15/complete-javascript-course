// *=== Challange 1 ====
/*
const calcAverage = (t1, t2, t3) => {
	return (t1 + t2 + t3) / 3;
};

const scoreDolpin = calcAverage(10, 20, 30);
const scoreKoala = calcAverage(10, 30, 170);
console.log(scoreDolpin, scoreKoala);

const checkWinner = function (dolphin, koala) {
	if (dolphin >= 2 * koala) {
		console.log(`dolphin is a winner with score ${dolphin}`);
	} else if (koala >= dolphin * 2) {
		console.log(`koala is a winner with score ${koala}`);
	} else {
		console.log("no winner");
	}
};
checkWinner(scoreDolpin, scoreKoala);
*/

// *=== Challange 2 ===

/*
function calcTip(bill) { // fungsi deklarasi
        let tip;
        if (bill >= 50 && bill <=300) {
                tip = bill*15/100;
                return tip;
        }else {
                tip = bill*20/100;
                return tip;
        }
}

const tes1 = calcTip(100);
console.log(tes1);

const bill = [125,555,44];
console.log(bill);

const tips = [
        calcTip(125),
        calcTip(555),
        calcTip(44)
]
console.log(tips);

const total = [
        bill[0] + tips[0],
        bill[1] + tips[1],
        bill[2] + tips[2]
]
console.log(total);

// & Versi  lain
const hitung =  function(bill){  // fungsi ekspresi
        return bill >= 50 && bill <=300 ? bill*0.15 : bill*0.2;
}

const itung = bill => bill >= 50 && bill <= 300 ? bill*0.15:bill*0.2; // fungsi Arrow
*/

// *=== tantangan 3 ===
/*
const mark = {
        nama : 'Mark miller',
        mass : 78,
        height : 1.69,

        calcBMI : function(){
                this.BMI = this.mass/this.height**2;
                return this.BMI;
        }
}
const jonh = {
	nama: "John Smit",
	mass: 92,
	height: 1.95,

	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
};

console.log(`${mark.nama} BMI (${mark.calcBMI()}) is ${mark.calcBMI() < jonh.calcBMI() ? "lower":"higher"} than ${jonh.nama} BMI (${jonh.calcBMI()})`);
*/

// *=== Tantangan 4 ===

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let index = 0; index < bills.length; index++) {
	const tip = calcTip(bills[index]);
	tips.push(tip);
	totals.push(tip + bills[index]);
}
console.log(`bills : ${bills}\n tips : ${tips} \n total : ${totals}`);

const calcAverage = function (arr) {
	let sum = 0;
	for (let index = 0; index < arr.length; index++) {
		sum += arr[index];
	}
	// console.log(sum);
        return sum/arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

