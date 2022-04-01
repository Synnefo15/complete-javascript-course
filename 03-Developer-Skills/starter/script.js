// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
	let str = "";
	for (let index = 0; index < arr.length; index++) {
        str = str + `${arr[index]} C in ${index+1} day ... `
    }
    console.log('...'+str);
};
printForecast(data1)