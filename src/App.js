import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res.products);
      });
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={getProducts}>Search</button>

      <ul>
        {Array.isArray(products) &&
          products.map((product) => (
            <li key={product.title}>{product.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
