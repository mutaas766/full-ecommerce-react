import "./HeroSection.css"; // optional, for styling
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const ProductGrid = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    { id: 1, name: "Product 1", price: 19.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" }, // kids clothes
    { id: 2, name: "Product 2", price: 19.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" }, // electronics
    { id: 3, name: "Product 3", price: 19.99, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" }, // women clothes
    { id: 4, name: "Product 4", price: 19.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" }, // men clothes
    { id: 5, name: "Product 5", price: 19.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" }, // kids shoes
    { id: 6, name: "Product 6", price: 19.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" }, // women shoes
    { id: 7, name: "Product 7", price: 19.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" }, // electronics
    { id: 8, name: "Product 8", price: 19.99, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" }, // men shoes
    { id: 9, name: "Product 9", price: 19.99, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" }, // kids clothes
    { id: 10, name: "Product 10", price: 19.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" }, // kids clothes
    { id: 11, name: "Product 11", price: 19.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" }, // electronics
    { id: 12, name: "Product 12", price: 19.99, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" }, // women clothes
    { id: 13, name: "Product 13", price: 19.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" }, // men clothes
    { id: 14, name: "Product 14", price: 19.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" }, // kids shoes
    { id: 15, name: "Product 15", price: 19.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" }, // women shoes
    { id: 16, name: "Product 16", price: 19.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" }, // electronics
    { id: 17, name: "Product 17", price: 19.99, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" }, // men shoes
    { id: 18, name: "Product 18", price: 19.99, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" }, // kids clothes
    { id: 19, name: "Product 19", price: 19.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" }, // kids clothes
    { id: 20, name: "Product 20", price: 19.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" }, // electronics

    { id: 21, name: "Women's Dress", price: 29.99, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" },
    { id: 22, name: "Men's T-Shirt", price: 15.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
    { id: 23, name: "Kids Toy Car", price: 12.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
    { id: 24, name: "Bluetooth Headphones", price: 49.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { id: 25, name: "Women's Handbag", price: 39.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { id: 26, name: "Smartphone", price: 299.99, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
    { id: 27, name: "Kids Sneakers", price: 24.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" },
    { id: 28, name: "Laptop", price: 599.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { id: 29, name: "Women's Scarf", price: 9.99, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" },
    { id: 30, name: "Men's Watch", price: 89.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" }
  ];

    return (
    <div className="container my-5">
      <h2 className="mb-4">Latest Products</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 text-center">
              <img
                src={product.img}
                alt={product.name}
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGrid;