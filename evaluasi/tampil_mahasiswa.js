const fs = require("fs");
const batasNilai = 75;

let data = fs.readFileSync("mahasiswa.json", "utf8");
let mahasiswaArray = JSON.parse(data);

mahasiswaArray.sort((a, b) => a.nama.localeCompare(b.nama));
// console.log(mahasiswaArray);

mahasiswaArray.forEach((mahasiswa, i) => {
  console.log(`${i + 1}.Nama : ${mahasiswa.nama}`);
  console.log(` Matkul : ${mahasiswa.matkul}`);
  console.log(`Nilai : ${mahasiswa.nilai}`);  
  if (mahasiswa.nilai >= batasNilai) {
    console.log(mahasiswa.nama, " Anda lulus matkul ini");
  } else {
    console.log(mahasiswa.nama, " Anda tidak lulus matkul ini");
  }
  console.log("");
});
