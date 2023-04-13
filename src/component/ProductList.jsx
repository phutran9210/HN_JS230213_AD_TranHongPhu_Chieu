import React, { useState } from "react";

const Product = ({ product, addToCart, interest }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <img src={product.image} alt={product.title} width="100" height="100" />
      <div className="product-title">{product.title}</div>
      <div className="product-price">{product.price} USD</div>
      <button onClick={() => interest(product, quantity)}>Interest</button>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
      />
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

const ProductList = ({ products, addToCart, interest }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          interest={interest}
        />
      ))}
    </div>
  );
};

export default ProductList;
