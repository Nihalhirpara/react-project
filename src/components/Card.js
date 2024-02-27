  import React from "react";

  const ProductDetails = ({ productName, productDescription }) => {
    return (
      <div className="product-details">
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        {/* Add other product details you want to display */}
      </div>
    );
  };

  const Products = () => {
    const products = [
      {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        // Add other product details as needed
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        // Add other product details as needed
      },
      {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        // Add other product details as needed
      },
      {
        id: 4,
        name: "Product 4",
        description: "Description for Product 4",
        // Add other product details as needed
      },
      // Add more product items as needed
    ];

    return (
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <ProductDetails
              productName={product.name}
              productDescription={product.description}
            />
          </div>
        ))}
      </div>
    );
  };


  export default App  ;
