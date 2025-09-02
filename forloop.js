let jumlah = 0;

console.log("==== Bilangan Ganjil Kurang dari====20");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
    jumlah +=i;
  }
}

console.log("Total nilai ganjil di atas = ", jumlah);
