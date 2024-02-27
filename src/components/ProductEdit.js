import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3003',
});

function ProductEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    ProductCategory: "",
    ProductName: "",
    ProductWarranty: "",
    ProductWeight: "",
    ProductImage: "",
    ProductPrice: "",
  });
  
  useEffect(() => {
    axiosInstance.get(`/product/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async() => {
    await axiosInstance.put(`/admin/edit/${id}`, data);
    navigate('/login/admin');
  };

  return (
    <>
      <table style={{ marginTop: "100px" }}>
        <tbody>
          <tr>
            <td>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Product Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  name="ProductName"
                  value={data.ProductName}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Product Image
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  name="ProductImage"
                  value={data.ProductImage}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                Product Warranty
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  name="ProductWarranty"
                  value={data.ProductWarranty}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Product Price
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  name="ProductPrice"
                  value={data.ProductPrice}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Product Weight
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  name="ProductWeight"
                  value={data.ProductWeight}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Product Category
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  name="ProductCategory"
                  value={data.ProductCategory}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              <button
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Edit Product
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ProductEdit;
