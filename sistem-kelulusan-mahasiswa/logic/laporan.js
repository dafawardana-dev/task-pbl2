const {averageNilai, getKelulusan} = require("./analisisNilai.js");
const {gabungkanData} = require("./gabungData.js");


function laporanKelulusan() {
    const hasilKelulusan = getKelulusan();
    const dataMahasiswa = gabungkanData();
    hasilKelulusan.sort((a, b) => b.rataRata - a.rataRata);
    console.log("==== DATA MAHASISWA ====");
    dataMahasiswa.forEach((mhs, i) => {
        console.log(`${i + 1}. Nama: ${mhs.nama}, Nilai: ${mhs.nilai.join(",")}, Asal: ${mhs.asal}, Sekolah: ${mhs.sekolah}`);
    }
);  
console.log("");
console.log("==== LAPORAN KELULUSAN MAHASISWA ====");
hasilKelulusan.forEach((mhs, i) => {
        console.log(`${i + 1}. Nama: ${mhs.nama}, ID: ${mhs.id}, Rata-Rata: ${mhs.rataRata.toFixed(2)}, Status: ${mhs.status}`);
    });
    console.log("");
    console.log("===========================");
}

// laporanKelulusan();
module.exports = laporanKelulusan;