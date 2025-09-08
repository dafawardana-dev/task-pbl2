==== LAPORAN NILAI MAHASISWA ====

1. Nama: Budi
   Mata Kuliah: Kimia
   Nilai: 88
   Status: LULUS

2. Nama: Citra
   Mata Kuliah: Biologi
   Nilai: 72
   Status: TIDAK LULUS

3. Nama: Doni
   Mata Kuliah: Fisika
   Nilai: 95
   Status: LULUS

4. Nama: Eka
   Mata Kuliah: Matematika
   Nilai: 75
   Status: LULUS

==== INFO APLIKASI ====
Versi: 2.0.0
Pengembang: Tim Pengembang PBL

var array3 = [];
array2.find(function(element1) {
  var matched = array1.find(function(element2) {
    return element2[0].id == element1.id_from_array1;
  });
  if (matched != null) array3.push(matched);
});