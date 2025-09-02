// inisialisasi variable
let uangBayar = 100000;
let nasiGoreng = 25000;
let mieGoreng = 22000;
let capcay = 32000;
const diskon = 10;

// total belanja
let total = nasiGoreng + mieGoreng + capcay;
let diskonBelanja = total * (diskon / 100);
let setelahDiskon = total - diskonBelanja;
let kembalian = uangBayar - setelahDiskon;

console.log("Harga Nasi Goreng = Rp", nasiGoreng);
console.log("Harga Nasi Goreng = Rp", mieGoreng);
console.log("Harga Nasi Goreng = Rp", capcay);
console.log(" Total = Rp", total);
console.log("Diskon = ", diskon + "%");
console.log("Harga Setelah Diskon = Rp", setelahDiskon);
console.log("Pembayaran = Rp", uangBayar);
console.log("Kembalian = Rp", kembalian);


