// *=== 34-Function Declare vs express ===
/*
// & type1 eksprsi
function clacAge1(tglLahir) {
	const age = 2022 - tglLahir;
	return age;
}
const hasil = clacAge1(2000);
console.log(hasil);
// & type 2 deklarasi
// ? dibungkus var dulu
const calcAge2 = function (lahir) {
	return 2022 - lahir;
};
const hasil2 = calcAge2(1990);
console.log(hasil2);
*/

// *=== 35-arrow func ===
/* 
const calcAge3 = lahir => 2022 - lahir;
const age3 =  calcAge3(1980);
console.log(age3);

const pensiun = (lahir,nama) => {
    const age = 2022 - lahir;
    const tahunPensi = 65 - age;
    return `pak ${nama} pensiun kurang ${tahunPensi} tahun`;
}
console.log(pensiun(1990,"rafi"));
console.log(pensiun(1995,"Cahya"));
*/

// *=== 36-calling funch ===

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcess(apples,oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcess(2, 3)) ;
*/

// *=== 37-reviewing function

/*
const calcAge = function (birthYear) {
	return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstname) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;
	if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
		return retirement;
	} else {
        console.log(`kamu seharusnya pensiun ${-retirement} tahun lalu`);
        return -1;
	}
};

console.log(yearsUntilRetirement(2000, "rafi"));
console.log(yearsUntilRetirement(1950, "cahya"));

// & Jenis Fungsi
function calcAge(lahir) {  //Fungsi Deklarasi-> bisa dipake sebelum dideklarasikan
    return 2022 - lahir;
}
const calcAge = function (lahir) { //Expression->fungsi disimpan ke variabel
    return 2022 - lahir;
} 
const caclAge = lahir=>2022-lahir; //arrow -> bentuk singkat 
*/

// *=== 39-Introduction Array ===
/*
const teman1= 'Rafi';
const teman2= 'Cahta';

const friends = [
    'Rafi', 'Stecen', 'Peter'
];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-2]);

friends[2]='parker';
console.log(friends);

const years = new Array(1991,2000,2100,2013);
console.log(years);

const campuran = [teman1, 'mamad', 2020-20,friends];
console.log(campuran);

// &latihan
const calcAge = function (lahir){
    return 2022 - lahir;
    
} 
const tahun = [1990,2000,2010,2020];

const age1= calcAge(tahun[0]);
const age2= calcAge(tahun[1]);
const age3= calcAge(tahun[tahun.length-1]);
console.log(age1,age2,age3);
*/

// *=== 40-Basic array operation ===
/*
const friends = ['rafi','cahya','putra'];
friends.push('gilang'); //add akhir
console.log(friends);
friends.unshift('Mamad'); // add awal
console.log(friends);
friends.pop(); // remove last
console.log(friends);
friends.shift(); // remove awal
console.log(friends);
console.log(friends.indexOf('cahya')); // nyari index
console.log(friends.includes('Cahya'));

if (friends.includes('rafi')) {
    console.log('rafi ada');
}
*/

// *=== 42-Object Introduction ===

/*
const biodata = {
    nama    : "rafi",
    usia    : 21,
    asal    : "prob",
    kampus  : "UNEJ",
    hobi    : ['spd','jog','renang']
}
*/

// *=== 43 dot vs bracket ===

/*
const bio = {
    namaAwal : 'Rafi',
    namaAkhir : 'Cahya',
    age : 2022 - 2000,
    job : 'Student',
    hobi : ['spd','jogging','renang']

}
console.log(bio);
console.log(bio.job);
console.log(bio['age']);

const nameKey = 'Awal';
console.log(bio['nama' + nameKey]);

// const tertarik = prompt('pengen tau apa ?')
// console.log(bio[tertarik]);

// if (bio[tertarik]) {
//     console.log(bio[tertarik]);
// } else{
//     console.log("Wrong input");
// }

bio.lokasi = 'Indonesia';
bio['IG'] = '@r.ptr15';
console.log(bio);

const dataDiri = {
    nama :  "Rafi",
    friends : [
        "cahya", "putra", "mad"
    ]
    
}

console.log(dataDiri.friends[0]);

console.log(`${dataDiri['nama']} has ${dataDiri['friends'.length]} friends and his best friend is called ${dataDiri.friends[0]}`);
*/

// *=== 44-Object Method ===
/*
const rafi = {
	nAwal: "Rafi",
	nAkhir: "Cahya",
	lahir: 2000,
	job: "Student",
	teman: ["gilang", "syta", "putra"],
	sim: false,

	// calcAge : function (lahir) {
	//     return 2022-lahir;
	// }

	// calcAge: function () {
	//     console.log(this);
	// 	return 2022 - this.lahir;
	// }

	calcAge: function () {
		// console.log(this);
		this.age = 2022 - this.lahir;
		return this.age;
	},

	punyaSIM: function () {
		if (this.sim == 1) {
			return "punya";
		} else {
			return "tidak punya";
		}
	},

	ringkasan: function () {
		return `My name is ${this.nAwal} ${this.nAkhir} a ${this.job}. Saya lahir tahun ${
			this.lahir
		} dan berumur ${this.calcAge()}. Teman saya ada ${this.teman.length} yaitu ${
			this.teman
		}. Saya ${this.punyaSIM()} sim. saya ${this.sim ? 'punya':'tidak ada'} sim`;
	},
};

console.log(rafi.calcAge());
console.log(rafi.age);
// console.log(rafi['calcAge'](1999));

console.log(rafi.ringkasan());
*/

// *=== 46-iteration for loop ===
/*
for (let index = 1; index <= 10; index++) {
	console.log(`rafi ganteng ${index}`);
	
}
*/

// *== 47-looping array breaking
/*
const rafi = ["rafi", "cahya", 2022 - 2000, "murid", ["gilang", "syta", "ibu"], true];

const types = [];


for (let index = 0; index < rafi.length; index++) {
	console.log(rafi[index], typeof rafi[index]);

	// types[index] = typeof rafi[index]
	types.push(typeof rafi[index]);
}
// console.log(types);


const years = [2001, 2002, 2003, 2004, 2010];
const ages = [];

for (let index = 0; index < years.length; index++) {
	ages.push(2022 - years[index]); 
}
console.log(ages);

console.log("===continue===");
for (let index = 0; index < rafi.length; index++) {
	if (typeof rafi[index] !== "string") continue;

	console.log(rafi[index], typeof rafi[index]);
}
console.log("===Break===");
for (let index = 0; index < rafi.length; index++) {
	if (typeof rafi[index] === "number") break;

	console.log(rafi[index], typeof rafi[index]);
}
*/

// *=== 48-Looping backward

const rafi = [
	'Rafi',
	'Cahya',
	2022-2000,
	'murid',
	['gilang','syta','bryan']
]

for (let index = rafi.length-1; index >= 0; index--) {
	console.log(rafi[index]);
}

for (let exercise = 0; exercise < 4; exercise++) {
	console.log(`mulai exercise ${exercise}`);
	for (let index = 0; index <= 5; index++) {
		console.log(`makan ke-${index}`);
	}
}


