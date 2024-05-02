import React from 'react';
import axios from 'axios';
import '../App.css';
import Sidebar from "./sidebar";
import Navbar from "./navbar";
export default function HomeWithProducts() {
const [products, setProducts] = React.useState([]);

React.useEffect(() => {
    // Fetch products from MongoDB
    axios.get("http://localhost:5000/products")
    .then((response) => setProducts(response.data))
    .catch((error) => console.error("Error fetching products:", error));
}, []);

return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="product-list">
    {products.map((product) => (
        <div key={product._id} className="product-card">
        <img src={product.image} />
        <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <p>Price: {product.price}</p>
            <p>Seller: {product.stuName}</p>
            <p>Contact: {product.phnNo}</p>
        </div>
        </div>
    ))}
    </div>
    </>
);
}