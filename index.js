// Level 0
const num1 = 10
const num2 = 099
const num3 = 0.02

console.log(num1 + num2 + num3);

// Level 1

let num4 = 10
let num5 = 50

console.log(num4 + num5)
console.log(num4 - num5)
console.log(num4 * num5)
console.log(num4 / num5)
console.log(num4 % num5)

// Level 2.0
let makan = 'saya sedang makan';
let jumlah = '2 porsi'
let jajan = 'ketoprak';

console.log(makan + ' ' + jumlah + ' ' + jajan)

// Level 2.1

let angka1 = 100;
let angka2 = -10;
console.log(angka1 / angka2);

// Level 3.0
let menuMakanan = ["ketoprak", "lotek", "bakso", "mie ayam"]
menuMakanan.push('ayam geprek'); // add data into aray menu makanan
console.log(menuMakanan);

// Level 3.1
const makanan = [];

function addMakanan() {
	makanan.push("Martabak", "Kerak Telor", "Nasi Kucing"); // Add data to array "makanan"
	console.log(makanan);
}

function removeMakanan() { 
	makanan.pop(); 							// Remove data last array index of makanan
	return console.log(makanan);
}

addMakanan();
removeMakanan();


// Function implement biodata with loop

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





