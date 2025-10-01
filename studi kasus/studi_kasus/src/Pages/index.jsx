import Hero from "../components/shared/Hero";
import produkData from "../Utils/produkData";
import { useState } from "react";

export default function Home() {
 const preview = produkData.slice(0, 3);

  return (
    <>
      <Hero />

      <div className="container py-5 text-center">
      <h2>Sneak Peek</h2>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {preview.map((buku) => (
          <div className="col" key={buku.id}>
            <div className="card shadow-sm">
              <img src={buku.gambar} alt={buku.nama} className="card-img-top" style={{ height: "250px", objectFit: "contain"}}/>
              <div className="card-body">
                <h5>{buku.nama}</h5>
                <p>{buku.harga} • {buku.tahun}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <a href="/books" className="btn btn-primary" style={{backgroundColor: "#6f42c1", color: "white", border: "none", borderRadius: "8px", padding: "10px 20px", fontWeight: "500", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"}}>
          Our Beloved Collection
        </a>
      </div>
    </div>

    </>
  );
}
