import { useState } from "react";
import produkData from "../Utils/produkData";

export default function BookList() {
  const [books, setBooks] = useState(produkData);

  const tambahBuku = () => {
    const newBook = {
      id: books.length + 1,
      nama: "Data Buku Baru",
      tahun: 1997,
      harga: "$34.9",
      gambar: "https://via.placeholder.com/150",
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto text-center">
        <h1 className="fw-light">Our Precious Collection</h1>
        <p className="lead text-body-secondary">
            Discover the treasured collection at Old Times Literia, where vintage classics
            and timeless reads await. From rare editions to beloved masterpieces, our
            shelves are filled with stories that bring the elegance of the past into your
            hands today.
        </p>
        </div>



      <button className="btn btn-success mb-3" onClick={tambahBuku}  style={{backgroundColor: "#6f42c1", color: "white", border: "none", borderRadius: "8px", padding: "10px 20px", fontWeight: "500", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"}}>
        Tambah Buku
      </button>

      <div className="row row-cols-1 row-cols-md-3 g-3">
        {books.map((buku) => (
            <div className="col" key={buku.id}>
            <div className="card shadow-sm h-100">
                <img
                src={buku.gambar}
                alt={buku.nama}
                className="card-img-top"
                style={{ height: "250px", objectFit: "contain"}}
                />
                <div className="card-body d-flex flex-column">
                <h5 className="card-title">{buku.nama}</h5>
                <p className="card-text">{buku.harga} • {buku.tahun}</p>
                <div className="mt-auto">
                    <button className="btn btn-sm btn-outline-secondary" style={{backgroundColor: "#6f42c1", color: "white", border: "none", borderRadius: "8px", padding: "10px 20px", fontWeight: "500", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"}}>Buy</button>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}
