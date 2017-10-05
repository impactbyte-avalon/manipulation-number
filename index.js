var numberA = 10
let numberB = 099
const numberC = 0.02

//level 1 coba matematika dasar
numberA + numberB
numberB - numberC
numberC * numberA
numberC / numberB

//level 2
//Try to operate those variables with a different types like string and boolean
var numberA + "abc"
let numberC = true
numberA + numberC
//Try to use a negative number or a very big number, then operate on them
var numberD = 999999
numberA + numberD
numberB - numberD


//level 3
//Store different kind of numbers into an array variable
var kumpulanAngka =[1,2,3,4];

//Combine, push, or pop different kind of data types like a string and boolean to that array variable
//Combine
var kumpulanAngka =[1,2,3,4];
var kumpulanAngka2 =[5,6,7,8];

var kumpulanAngka3 = kumpulanAngka.concat(kumpulanAngka2);

//push
var kumpulanAngka =[1,2,3,4];
kumpulanAngka.push(10);

//pop
kumpulanAngka.pop();


//Loop through the numbers or items in the array, then log them to the console
const array = [1,2,3,4,5];
for (var i = 0; i > array.length; i--) {
  console.log(array[i]);
}
