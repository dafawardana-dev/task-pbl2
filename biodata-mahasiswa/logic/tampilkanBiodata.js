const mahasiswa = require("../data/mahasiswa.js");
const keteranganLulus = require("./logikaKategori.js");
const infoAplikasi = require("../config/aplikasi.js");

function tampilkanDataMahasiswa(mahasiswaArray) {
  mahasiswaArray.forEach((mahasiswa, i) => {
    console.log("==== BIODATA SISWA ====");
    console.log(`${i + 1}. Nama : ${mahasiswa.nama}`);
    console.log(`Umur : ${mahasiswa.umur}`);
    console.log(`Asal : ${mahasiswa.asal}`);
    console.log(`Sekolah : ${mahasiswa.sekolah}`);
    console.log(`Tahun lulus : ${mahasiswa.lulus}`);
    console.log(`Kategori Kondisi : ${keteranganLulus(mahasiswa.lulus)}`);
    console.log("");
    console.log("==== INFO APLIKASI ====");
    console.log(`Versi : ${infoAplikasi.VERSION}`);
    console.log(`Penanggung Jawab : ${infoAplikasi.PENANGGUNG_JAWAB}`);
    console.log("");
  });
}

tampilkanDataMahasiswa(mahasiswa);
