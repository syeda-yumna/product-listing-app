import React from "react";

const products = [
  { id: 1, name: "Wireless Headphones", price: "$49.99", category: "Audio" },
  { id: 2, name: "Smart Watch",         price: "$99.99", category: "Wearables" },
  { id: 3, name: "Bluetooth Speaker",   price: "$29.99", category: "Audio" },
  { id: 4, name: "Laptop Stand",        price: "$19.99", category: "Accessories" },
  { id: 5, name: "USB-C Hub",           price: "$39.99", category: "Accessories" },
  { id: 6, name: "Noise Cancelling Earbuds", price: "$79.99", category: "Audio" },
];

function ProductCard({ name, price, category }) {
  return (
    <div style={{
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      padding: "1.2rem",
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
    }}>
      <span style={{
        fontSize: "0.75rem",
        color: "#888",
        textTransform: "uppercase",
        letterSpacing: "0.05em"
      }}>
        {category}
      </span>
      <h3 style={{ margin: "0.5rem 0" }}>{name}</h3>
      <p style={{ fontWeight: "bold", color: "#2d6a4f" }}>{price}</p>
      <button style={{
        marginTop: "0.5rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#0073e6",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        Add to Cart
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Inter, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a2e" }}>🛒 Product Listing</h1>
      <p style={{ color: "#555" }}>Browse our latest collection of products.</p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1.2rem",
        marginTop: "1.5rem"
      }}>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;