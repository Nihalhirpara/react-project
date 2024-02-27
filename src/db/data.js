const axios = require("axios");

const getProducts = async () => {
  try {
    const products = await axios.get("http://localhost:3003/products");
    console.log(products);
    return products.data; // Use products.data to access response data
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
module.exports = { getProducts };