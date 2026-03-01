import react from "react";
import Footer from "../components/Dashboard/footer";
import { Dashboard } from "../components/Dashboard/Dashboard";


const Women =()=>{

    const products = [
        { id: 1, name: "Product 1", price: 19.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Product 2", price: 19.99, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "Product 3", price: 19.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Product 4", price: 19.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
        { id: 5, name: "Product 5", price: 19.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
        { id: 6, name: "Product 6", price: 19.99, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
        { id: 7, name: "Product 7", price: 19.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
        { id: 8, name: "Product 8", price: 19.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
        { id: 9, name: "Product 9", price: 19.99, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" },
        { id: 10, name: "Product 10", price: 19.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" },
        { id: 11, name: "Product 11", price: 19.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
        { id: 12, name: "Product 12", price: 19.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
        { id: 13, name: "Product 13", price: 19.99, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
        { id: 14, name: "Product 14", price: 19.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
        { id: 15, name: "Product 15", price: 19.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
        { id: 16, name: "Product 16", price: 19.99, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" },
        { id: 17, name: "Product 17", price: 19.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" },
        { id: 18, name: "Product 18", price: 19.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
        { id: 19, name: "Product 19", price: 19.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
        { id: 20, name: "Product 20", price: 19.99, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
    ];
    return (
        <div className="container my-5">
            <h2
                className="mb-4 text-center"
                style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    color: "#22223b",
                    textTransform: "uppercase",
                    marginBottom: "2rem",
                    fontFamily: "'Montserrat', sans-serif",
                    marginTop: "4rem",
                    color: "#0a0709",
                }}
            >
                Women Products
            </h2>

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
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}









export default Women
