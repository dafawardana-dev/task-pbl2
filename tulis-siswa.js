const fs = require("fs");

let siswa = [
    {
        nama: "wardana",
        kelas: "wardana",
        nilai: [78,92,87],
    },
];

// simpan data ke file json
fs.writeFileSync("siswa.json", JSON.stringify(siswa, null, 2));
console.log("Data siswa berhaisl di tulis");
