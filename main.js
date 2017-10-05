/**************LEVEL 0***************/
var myNumber = 90;
let yourNumber = 40;
const hisNumber = 20;

console.log(myNumber);
console.log(yourNumber);
console.log(hisNumber);



/**************LEVEL 1***************/
var a = 3;
var k = 66;
var l = 4;

var a_Tambah_l = a + l;
var k_Kurang_l = k - l;
var k_Bagi_a = k / a;
var l_Kali_a = l * a;
var sisaBagi_k_dan_l = k % l;

console.log(a_Tambah_l);
console.log(k_Kurang_l);
console.log(k_Bagi_a);
console.log(l_Kali_a);
console.log(sisaBagi_k_dan_l);



/**************LEVEL 2***************/
/************GetFahrenheit***********/
function celciusToFahrenheit(celcius) {
  var fahrenheit;
	fahrenheit = (celcius * 9/5) - 32;
  return fahrenheit;
}

console.log(celciusToFahrenheit(30))

/**************YouNameIt**************/
function cekAja(jumlahLogistik, jumlahKonsumsi) {
    
  var kelebihan = jumlahLogistik % jumlahKonsumsi;
  var jumlahKekurangan = jumlahLogistik - jumlahKonsumsi;
  var jumlahKelebihan = jumlahKonsumsi - jumlahLogistik;
    
  if (kelebihan === 0) {
      return "Bantuan sudah mencukupi";
    
    } else if (kelebihan !== 0 && jumlahKelebihan > 0) {
      return "Kekurangan Bantuan: " + jumlahKelebihan;

    } else if (kelebihan < jumlahKonsumsi) {
      return "Kelebihan Bantuan: " + jumlahKekurangan;
    }
} 

console.log(cekAja(5, 20));
console.log(cekAja(100, 9));
console.log(cekAja(1234, 1234));



/**************LEVEL 3***************/
var isArray = ["hafidz", ["22", "88"], ["merah", "biru"]];

console.log(isArray[2][1]);

/************************************/
var propinsi = [];

function addProvinceJatim() {     	//Add Jatim Button
  propinsi.push("Jawa Timur");
	return console.log(propinsi);
}

function addProvinceJateng() {		//Add Jateng Button
  propinsi.push("Jawa Tengah");
	return console.log(propinsi);
}

function addProvinceJabar() {		//Add Jabar Button
  propinsi.push("Jawa Barat");
	return console.log(propinsi);
}

function undoAddedProvince() {     //Dellete latest province
  propinsi.pop();
	return console.log(propinsi);
}

addProvinceJatim();
addProvinceJateng();
addProvinceJabar();

undoAddedProvince();

/************************************/
var kota = ["Solo", "Jakarta", "Medan", "Jayapura"];
var kotaLength = kota.length;
var text = "Daftar kota besar: ";

for (i = 0; i < kotaLength; i++) {
    console.log(text += " " + kota[i]);
}

