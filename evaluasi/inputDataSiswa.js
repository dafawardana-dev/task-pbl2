const fs = require("fs");

let mahasiswa = [
  {
    nama: "Wardana",
    matkul: "web",
    nilai: 90,
  },
  {
    nama: "Dafa",
    matkul: "web",
    nilai: 80,
  },
  {
    nama: "Muhammad",
    matkul: "web",
    nilai: 70,
  },
  {
    nama: "Alfariz",
    matkul: "web",
    nilai: 75,
  },
  {
    nama: "Ridho",
    matkul: "web",
    nilai: 85,
  },
];

// simpan data ke file json
fs.writeFileSync("mahasiswa.json", JSON.stringify(mahasiswa, null, 2));
console.log("Data siswa berhasil di tulis");
