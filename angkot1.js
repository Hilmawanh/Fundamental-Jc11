// var jmlAngkot = 15;
// var angkot = 1;

// while (angkot <= jmlAngkot) {
//   console.log("Angkot No. " + angkot + " Beroprasi dengan baik.");
//   angkot++;
// }

var jumlahAngkot = 10;
var beroprasi = 6;
var noAngkot = 1;
for (i = 1; i <= beroprasi; i++) {
  console.log("Angkot No. " + noAngkot + " Sedang beroprasi");
  noAngkot++;
}
for (i = 0; i <= jumlahAngkot - beroprasi; i++) {
  console.log("Angkot No. " + noAngkot + " Sedang tidak beroprasi");
  noAngkot++;
}
