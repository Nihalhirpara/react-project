import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
// import ProductDetails from "../components/ProductDetails";

function Admin() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.ProductName?.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({
          ProductCategory,
          ProductName,
          ProductWarranty,
          ProductWeight,
          ProductImage,
          ProductPrice,
        }) =>
          ProductCategory === selected ||
          ProductName === selected ||
          ProductWarranty === selected ||
          ProductWeight=== selected ||
          ProductImage === selected ||
          ProductPrice === selected
      );
    }

    return filteredProducts.map(
      ({
        _id, 
        ProductImage,
        ProductName,
        ProductWarranty,
        ProductWeight,
        ProductPrice,
        ProductCategory,
      }) => (
        <div key={_id} className="card w-25 p-2 ">
        <img
          src={ProductImage}
          alt={ProductName}
          // alt={ProductPrice}
          className="card1 card-img w-64"
        />
        <div className="card-details">
          <h3 className="card-title">{ProductName}</h3>
          <p className="card-text">Price: {ProductPrice}</p>
          {/* <p className="card-text">Warranty:{ProductWarranty}</p>
          <p className="card-text">Weight: {ProductWeight}</p>
          <p className="card-text">Price: {ProductPrice}</p>
          <p className="card-text">Category: {ProductCategory}</p> */}
          <p className="card-text">
            {/* Additional information link */}
            <Link key={_id} to={`/admin/${_id}`}>More Info</Link>
          </p>
        </div>
      </div>

      )
    );
  };

  const result = filteredData(selectedCategory, query);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (productId) => {
    // Navigate to the '/admin/:id' route
    navigate(`/admin/${productId}`);
  };

  const handleAddProductClick = () => {
    // Navigate to the '/admin/add' route
    navigate('/admin/add');
  };

 return (
   <div>
     <div style={{marginTop:'90px'}}>
       <button className="btn btn-primary" onClick={handleAddProductClick}>
     Add Product
   </button>
       </div>
     <div className="products-container w-75 ms-64 d-flex flex-wrap">{result}</div>
   </div>
 );
}

export default Admin;