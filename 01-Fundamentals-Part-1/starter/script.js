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


