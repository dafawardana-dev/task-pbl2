const mahasiswa = require("../data/mahasiswa.js");
const nilai = require("../data/nilai.js");

function gabungkanData(mhs) {
    const dataGabungan = [];
  mahasiswa.forEach(mhs => {
    // Cari semua nilai yang cocok dengan mahasiswa.id
    const nilaiMahasiswa = nilai.filter(n => n.mahasiswaId === mhs.id);

    // Pastikan ada nilai yang ditemukan sebelum melanjutkan
    if (nilaiMahasiswa.length > 0) {
      // Tambahkan semua nilai ke objek mahasiswa      
      dataGabungan.push({ mhs, // Menggabungkan semua properti mahasiswa (id, nama, dll.)
        nama: mhs.nama,
        id: mhs.id,      
        asal: mhs.asal,
        sekolah: mhs.sekolah,  
        nilai: nilaiMahasiswa.map(n => n.nilai), // Membuat array dari nilai-nilai
      });
    }
  });
  return dataGabungan;
}

// console.log(gabungkanData());
module.exports = { gabungkanData };