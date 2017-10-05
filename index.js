// Level 0
var num1 = 10
let num2 = 099
const num3 = 0.02

console.log(num1 + numb2 + num3);

// Level 1

let num1 = 10
let num2 = 50

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

// Level 2.0
let makan = 'saya sedang makan';
let jumlah = '2 porsi'
let makanan = 'ketoprak';

console.log(makan + ' ' + jumlah + ' ' + makanan)

// Level 2.1

let angka1 = 100;
let angka2 = -10;
console.log(angka1 / angka2);

// Level 3.0
let menuMakanan = ["ketoprak", "lotek", "bakso", "mie ayam"]
menuMakanan.push('ayam geprek');
console.log(menuMakanan);

// Level 3.1

var bioData = [
    ["Ahmed", "Makan", "lotek"],
    ["David", "Memancing", "Ikan"],
    ["Slamet", "Membaca", "Buku"],
]

function kumpulanBio(bioData) {
    for (var i = 0; i < bioData.length; i++) {
        console.log('Nama : ' + bioData[i][0]);
        console.log('Hobi : ' + bioData[i][1] + " " + bioData[i][2]);
        console.log(' ');
    }
}

kumpulanBio(bioData);