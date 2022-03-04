// # ======SECTION 1=========

/*
let js = "Mantap";
console.log("rafi");
console.log(23);
let name = "rafi"
let country="indonesia"
console.log(country);
*/

/*
true;
console.log(true);
*/

/*
let age = 30;
age = 31;

const birth = 2000;
birth = 2009;
*/

// * 17 template string
/*
const fname = 'Rafi';
const job = 'student';
const born = 1999;
const year = 2021;

const jonas = "I'm " + fname + ',a ' + job + ' year ' + (year-born);

console.log(jonas);

const jonahNew = `I'm ${fname}, a ${job}`;
console.log(jonahNew);
console.log(`muhammad rafi cah`);
console.log(`rafi \n\
cahya\n\
putra`);
console.log(`string
baris baru
mantap`);
*/

// * 18 If Else
/*
const age = 15;
const cukupTua = age >= 18;

if (cukupTua) {
    console.log('Boleh nyetir 🦅');
}else{
    const yearleft = 18-age;
    console.log(`Tidak boleh nyetir 🙏, masih krg ${yearleft} years `);
}

const tahunLahir = 2001;
let abad;
if (tahunLahir <= 2000) {
    abad = 20;
}else{
    abad = 21;
}
console.log(abad);
*/

// * 20 Conversion
// & type conversion
/*
const inputYear = '2000';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Jonas'));
console.log(String(23));

// & type coercion : bisa ngubah type data
console.log("I'm " + 23 + " Old");
console.log("12"+"10"-2);

console.log('9'-'5'); //4
console.log('19'-'13'+'17'); //617
console.log('19'-'13' + 17); //23
console.log('123' < 57); //false
console.log(5+6+'4'+9); //11 114 123 119 117
*/

// * 21 Truth & False value
// false value = 0,'',undefined, null,NaN
/*
console.log(Boolean(undefined));

const money = 1;
if (money) {
    console.log("Jangan Boros");
}else{
    console.log("Cari kerja");
}
*/

// * 22 Equality Ops
/*
const age = '18';
if (age == 18) console.log("Sudah 18");

const fav = Number(prompt("Umur berapa? "));
console.log(typeof(fav));

if (fav === 21) {
    console.log(`Umur anda 21 ya` );
}else if( fav === 7){
    console.log(`umur anda 7 kan`);
}else{
    console.log(`umur anda ${fav}`);
}
*/

//* 24 Logical ops
/*
const hasDriverLis = true;
const hasGoodVis = true;

console.log(hasDriverLis && hasGoodVis);
console.log(hasDriverLis || hasGoodVis);
console.log(!hasDriverLis || hasGoodVis);

const shouldDrive = hasDriverLis && hasGoodVis;
if (shouldDrive) {
    console.log(`Boleh nyetir`);
}else{
    console.log(`Tidak boleh nyetir`);
}

const isOld = false;
console.log((hasDriverLis || hasGoodVis) && isOld);
*/

//* 26 Switch
/*
const day = "Tuesday";

switch (day) {
	case "Sunday":
		console.log("hari ini minggu");
		break;
    case "Monday":
        console.log("ini hari senin");
        break;
    case "Tuesday":
        console.log("ini hari selasa");
        break;
	default:
		console.log("Hari apa?");
		break;
}
*/

// * 28 Ternary
/*
//& sama dengan if
const age = 10;
age >= 18 ? console.log("Boleh punya SIM") :console.log("Tidak boleh nyetir");

const drink = age >= 18 ? 'Wine' : 'Water' ;
console.log(drink);

console.log(`Aku pengen minum ${age >= 18 ? "Wine" : "Water"}`);
*/

// # ======SECTION 2=========

//* 32 Strict mode
// digunakan agar di conlose ada warning kalo salah
/* 'use strict'; 
let hasDriverLis = false;
const passTest = true;

if (passTest) hasDriverLi = true;
if (hasDriverLis) console.log("BOleh nyetir");
*/

// * 33 Function
/*
function makan() {
    console.log("saya makan nasi putih");
}
makan();

function buah(pisang,apel) {
    console.log(pisang,apel);
    const jus = `saya minum jus ${pisang} buah pisang dan ${apel} buah apel`;
    return jus;
}
const namaBuah =  buah(4,3);
console.log(namaBuah);
buah(6,7)
*/

//* 34 Function Declaration
function age1(tahun) {
	const age = 2020 - tahun;
	return age;
}
