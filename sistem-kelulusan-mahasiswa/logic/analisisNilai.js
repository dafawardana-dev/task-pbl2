// Di file utama Anda
const { gabungkanData } = require("./gabungData.js");

// Panggil fungsi gabungkanData() untuk mendapatkan array yang valid
const dataYangSiapDiproses = gabungkanData();
// average nilai
function averageNilai(dataGabungan) {
  const hasilRataRata = [];
  dataGabungan.forEach((mhs) => {
    // const totalNilai = mhs.nilai.reduce((sum, current) => sum + current, 0);
    // membuat for untuk total nilai 
    let totalNilai = 0;
    for (let i = 0; i < mhs.nilai.length; i++) {
        totalNilai += mhs.nilai[i];
    }
    const rataRata = totalNilai / mhs.nilai.length;
    hasilRataRata.push({
      nama: mhs.nama,
      id: mhs.id,
      rataRata: rataRata,
    });
  });
  return hasilRataRata;
}

function getKelulusan(){
    const dataRataRata = averageNilai(dataYangSiapDiproses);
    const hasilKelulusan = dataRataRata.map(mhs => ({
        nama: mhs.nama, 
        id: mhs.id, 
        rataRata: mhs.rataRata,
        status: mhs.rataRata >= 75 ? "Lulus" : "Tidak Lulus"
    }));
    return hasilKelulusan;    
}
// Sekarang, panggil averageNilai dengan array yang sudah valid
// console.log(averageNilai(dataYangSiapDiproses));
// console.log(getKelulusan());

module.exports = {averageNilai, getKelulusan};