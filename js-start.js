"use strict";
console.log('Учу JS');

/*1 Undefined */
let UserName;
console.log(typeof UserName);
console.log(UserName);

/*2. Null*/
/*block = doc*/
let block = document.querySelector('.block');
console.log(block);
console.log(typeof block);

/*3. Boolean true or false */
let willYouMarryMe = true;
if (willYouMarryMe) {
	console.log(':)')
} else {
	console.log(':(')
}
/*Boolean c операторами сравнения*/
let trueOfFalse = 10 < 2;
console.log(trueOfFalse);
 /*4. Number*/
 let AGE = 20;
 let userHeight = 1.83;
 console.log(AGE);
 console.log(typeof AGE);
 console.log(userHeight);
 console.log(typeof userHeight);

 /*специальное числовое значение
 Infnity (математическая бесконечность)*/
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

/*-Infnity (математическая бесконечность)*/
let getinfinity = -58 / 0;
console.log(getinfinity);
console.log(typeof getinfinity);

/*NaN*/
let getNan = 'qqq' / 10;
console.log(getNan);
console.log(typeof getNan);

/*5. BigInt */
const bigInteger = 12345678995468542236512555n;
console.log(typeof bigInteger);

/*6. String*/
let userAge = 34;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);

/*7. Object*/
let userInfo = {
	name: "Ann",
	age: 34
}
console.log(userInfo);
console.log(typeof userInfo);

/*строковое преобразование*/
let UserAge = 34
console.log(UserAge);
console.log(typeof UserAge);
UserAge = String(UserAge);
console.log(UserAge);
console.log(typeof UserAge);

/*Циклы while for*/
let num =0;
while (num < 6) {
	console.log(num);
	num++;
}

for(let num = 0; num < 6; num++) {
console.log(num);
}

/*Последнее число будет 0?- false*/
num = 8;
while (num) {
	console.log(num);
	num--;
}
/*переписать на While*/
for(num = 0; num <3; num++) {
	console.log(`Число: ${num}`);
}
num = 0;
while (num < 3) {
console.log(`Число: ${num}`);
num++;
}

/*Перкратить работу цикла 1, когда size=1*/
//Цикл1
firstfor: for(let num = 0; num <2; num++) {
	//Цикл2
	for(let size = 0; size < 3; size++){
		if(size == 1){break firstfor;
		}
		console.log(size);
	}
}

function getSumm() {
		let numOne, numTwo;
		
		function getNumOne() {
			numOne = 1;
		}
		function getNumTwo() {
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();
		
		let numSumm = numOne + numTwo;
		console.log(numSumm);
	}
getSumm();

/*колбэк*/
function calcSumm(numOne, numTwo,more, less) {
	let numSumm = numOne + numTwo;
	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}
function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 5, showMoreMessage, showLessMessage);

/*setTimeout*/

function showMessage (text , name) {
console.log (`${text}, ${name}!`);
}
setInterval(showMessage, 3000, 'Привет', 'Мир');
/*Object*/
let firstPart = "likes";
let userInfo2 = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};
console.log(userInfo2[firstPart]);
let key = "name";
console.log(userInfo2[key]);

let userInfo3 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Kalistovo",
		street: "Freedom",
	}
		
};
console.log(userInfo3);
console.log(userInfo3.address);
console.log(userInfo3.address.city);


