// *=== Function ===

/*
function describeCountry(country,population,capitalCity) {
    return `${country} has ${population} million and its capital city is ${capitalCity}`
}

console.log(describeCountry("indonesia",273,"Jakarta"));
*/

// *=== Declare vs express ===
/*
// & exprssion function
const worldPopulation = 7900;
function percentOfWolrd(country,population) {
    const calc = population/worldPopulation*100;
    return `${country} has million people, so it's about ${calc}% of world population`;
}
const indo = percentOfWolrd("indonesia",273);
const india = percentOfWolrd("india",900);
const ireland = percentOfWolrd("Ireland",5);
console.log("Express");
console.log(indo);
console.log(india);
console.log(ireland);

// & Declare
const percentOfWolrd2 = function (country,population) {
    const calc = (population / worldPopulation) * 100;
		return `${country} has million people, so it's about ${calc}% of world population`;
}
const a = percentOfWolrd2('Africa',20);
const b = percentOfWolrd2('Zambie',40);
const c = percentOfWolrd2('Namibia',34);
console.log('Deklare');
console.log(a);
console.log(b);
console.log(c);
*/

// *=== Arrow Function ===
/*
const percentageOfWorld3 = population => population/7900*100;

const malay = percentageOfWorld3(100);
console.log(malay);
*/

// *=== Calling other function
/*
function percentOfWolrd(hitung) {
    return hitung/7900*100;
}
function describePopulation(country,population) {
    const calc = percentOfWolrd(population);
    return `${country} has ${population} million people which is about ${calc} of the world`;

    
}
console.log(describePopulation("indonesia",200));
*/

// *=== ARRAY ===
/*
function percentOfWolrd(hitung) {
    return hitung/7900*100;
}
const populations = [200,100,300,500];
console.log(populations.length===4);
const percentages = [
    percentOfWolrd(populations[0]),
    percentOfWolrd(populations[1]),
    percentOfWolrd(populations[2]),
    percentOfWolrd(populations[3])
];
console.log(percentages);
*/

// *=== Basic Array Operation ===
/*
const tetangga = ['indo','malay','singa','filip'];
tetangga.push("utopia");    console.log(tetangga);  
tetangga.pop();             console.log(tetangga);
if (tetangga.includes('Germany')) {
    console.log('central europe');
}else{
    console.log("Not central europe");
}
tetangga[0]='indonesia';    console.log(tetangga);
tetangga[tetangga.indexOf('singa')] = 'Singapore';
console.log(tetangga);
*/

// *=== Introduc Object ===
/*
const myCountry = {
    country : "Indo",
    capital : "JKT",
    lang : "jawa",
    populatation : 202,
    tangga : [
        'malyt','singa','timor'
    ]

};
console.log(myCountry);
*/

// *=== Dot bracket ===
/*
const finland = {
    name : 'finland',
    populatation : 6,
    tetangga : [
        'a','b','helsinki'
    ]
};
console.log(`${finland.name} jas ${finland.populatation} finish speaker, ${finland.tetangga.length} countries and a capital called ${finland.tetangga[2]}`);
console.log(finland.populatation+=4);
console.log(finland['populatation']-=2);
*/

// *=== Object Method ===
/*
const myCountry = {
	name: "Indonesia",
	population: 273,
	perbatasan: ["malay", "singapur", "timor"],
	describe: function () {
		return `${this.name} punya ${this.population} juta jiwa. Berbatasan dengan negera ${this.perbatasan}`;
	},
	checkIslan: function () {
		this.isLand = this.perbatasan != null ? true : false;
		return `${this.name} ${this.isLand} punya perbatasan`;
	},
};

console.log(myCountry.describe());
console.log(myCountry.checkIslan());
*/

// *=== Iteration for the loop ===
/*
for (let index = 0; index < 51; index++) {
    console.log(`voter number ${index} has voted`);
}
*/

// *=== Looping arrays, breaking & cont
/*
const countries = [100, 200, 300, 400];

const jumlahPersen = [];

function persentase(angka) {
	return (angka / 7900) * 100;
}

for (let index = 0; index < countries.length; index++) {
	const hasil = persentase(countries[index]);
	jumlahPersen.push(hasil);
}

console.log(`hasil polulasi adalah ${jumlahPersen}`);
*/

// *=== Looping backwards
// # harus diselesaikan dulu inner for-nya baru nanti bisa ke outer for
const listOfNeighbours = [
    ['Canada','Mexico'],
    ['Spain'],
    ['Norway','Sweden','Russia']
]
console.log(listOfNeighbours.length);

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour : ${listOfNeighbours[i][j]}`);
    }
    console.log('--end');
}