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
