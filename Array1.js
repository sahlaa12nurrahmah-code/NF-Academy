// Array produk (array of objects)
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Function Expression untuk menambah produk
const tambahProduk = function(nama, harga, stok) {
  let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  produkToko.push({ id: idBaru, nama: nama, harga: harga, stok: stok });
  console.log(`Tambah produk "${nama}"!\n`);
  console.log(`Produk "${nama}" berhasil ditambahkan!\n`);
};

// Arrow Function untuk menghapus produk
const hapusProduk = (id) => {
  let index = produkToko.findIndex((produk) => produk.id === id);
  if (index !== -1) {
    console.log(`Produk "${produkToko[index].nama}" berhasil dihapus!\n`);
    produkToko.splice(index, 1);
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan!\n`);
  }
};

// Function Declaration untuk menampilkan produk
function tampilkanProduk() {
  console.log("=== Daftar Produk Toko ===");
  for (let i = 0; i < produkToko.length; i++) {
    let p = produkToko[i];
    console.log(`ID: ${p.id}, Nama: ${p.nama}, Harga: Rp${p.harga}, Stok: ${p.stok}`);
  }
}

// Menampilkan hasil
tampilkanProduk(); // Menampilan produk semula
tambahProduk("Headset", 500000, 8); // Melakukan penambahan produk. Produk yang ditambahkan dapat diubah dengan mengisi nama produk, harga produk, dan stok
tampilkanProduk(); //Menampilkan produk setelah ditambahkan
hapusProduk(2); // Menghapus produk. Produk yang dihapus dapat diganti berdasarkan ID-nya
tampilkanProduk(); // Menampilkan list produk akhir