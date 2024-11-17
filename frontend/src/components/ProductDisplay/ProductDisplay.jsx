

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import'./Product.css';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState({ brand: '', diameter: '', baseplateType: '', bagSystem: '', bagType: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the backend API
    axios.get('http://localhost:5000/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    // Add product to cart
    setCart([...cart, product]);
    navigate('/cart', { state: { cart: [...cart, product] } });
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredProducts = products.filter((product) =>
    (filter.brand ? product.brand === filter.brand : true) &&
    (filter.diameter ? product.diameter === filter.diameter : true) &&
    (filter.baseplateType ? product.baseplateType === filter.baseplateType : true) &&
    (filter.bagSystem ? product.bagSystem === filter.bagSystem : true) &&
    (filter.bagType ? product.bagType === filter.bagType : true)
  );

  return (
    <div>
      <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>COLOSTOMY BAGS</h1>


      
      {/* Filters */}
      <div className="filters">
        <select name="brand" value={filter.brand} onChange={handleFilterChange}>
          <option value="">Brand</option>
          <option value="Alterna">Alterna</option>
          <option value="Conveen">Conveen</option>
          <option value="SenSura">SenSura</option>
          <option value="SenSura Mio">SenSura Mio</option>
        </select>

        <select name="diameter" value={filter.diameter} onChange={handleFilterChange}>
          <option value="">Diameter</option>
          <option value="40mm">40 mm</option>
          <option value="50mm">50 mm</option>
          <option value="60mm">60 mm</option>
          <option value="70mm">70 mm</option>
        </select>

        <select name="baseplateType" value={filter.baseplateType} onChange={handleFilterChange}>
          <option value="">Baseplate Type</option>
          <option value="Standard">Standard</option>
          <option value="Convex">Convex</option>
        </select>

        <select name="bagSystem" value={filter.bagSystem} onChange={handleFilterChange}>
          <option value="">Bag System</option>
          <option value="1-Piece">1-Piece</option>
          <option value="2-Piece">2-Piece</option>
        </select>

        <select name="bagType" value={filter.bagType} onChange={handleFilterChange}>
          <option value="">Bag Type</option>
          <option value="Opaque">Opaque</option>
          <option value="Transparent">Transparent</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <button className="wishlist-btn">♡</button>
            </div>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">
              MRP ₹{product.price} <span className="price-per-unit">({(product.price / 6).toFixed(0)}/Unit)</span>
            </p>
            <p className="product-stock">
              {product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
            </p>
            <button 
              className="add-to-cart-btn" 
              onClick={() => handleAddToCart(product)} 
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to cart' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
