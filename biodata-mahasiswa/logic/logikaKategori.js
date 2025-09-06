const mahasiswa = require(`../data/mahasiswa.js`);

// In logikaKategori.js
function keteranganLulus(lulus) {
  if (lulus > 2021) {
    return "Lulus Setelah Covid";
  } else if (lulus >= 2019 && lulus <= 2021) {
    return "Lulus Saat Covid";
  } else {
    return "Lulus Sebelum Covid";
  }
}

module.exports = keteranganLulus;
