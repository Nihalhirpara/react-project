import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3003/admin',
});

function ProductAdd() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    ProductCategory: "",
    ProductName: "",
    ProductWarranty: "",
    ProductWeight: "",
    ProductImage: "",
    ProductPrice: "",
  });
  const [errors, setErrors] = useState({
    ProductCategory: "",
    ProductName: "",
    ProductWarranty: "",
    ProductWeight: "",
    ProductImage: "",
    ProductPrice: "",
  });

  const handleValidation = () => {
    let valid = true;
    const newErrors = {
      ProductCategory: "",
      ProductName: "",
      ProductWarranty: "",
      ProductWeight: "",
      ProductImage: "",
      ProductPrice: "",
    };

    // Validation logic for each field
    if (data.ProductCategory.trim() === "") {
      newErrors.ProductCategory = "Product Category is required";
      valid = false;
    }
    if (data.ProductName.trim() === "") {
      newErrors.ProductName = "Product Name is required";
      valid = false;
    }
    if (data.ProductWarranty.trim() === "") {
      newErrors.ProductWarranty = "Product Warranty is required";
      valid = false;
    }
    if (data.ProductWeight.trim() === "") {
      newErrors.ProductWeight = "Product Weight is required";
      valid = false;
    }
    if (data.ProductImage.trim() === "") {
      newErrors.ProductImage = "Product Image is required";
      valid = false;
    }
    if (data.ProductPrice.trim() === "") {
      newErrors.ProductPrice = "Product Price is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleAdd = async () => {
    if (handleValidation()) {
      console.log(data);
      const response = await axiosInstance.post("/add", data);
      navigate('/login/admin');
      console.log("Response : ", response);
    }
  };

  return (
    <>
    <div className="col-md-12">
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
                  onChange={(e) => setData({ ...data, ProductName: e.target.value })}
                />
              </div>
              <p className="text-danger">{errors.ProductName}</p>
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
                  onChange={(e) => setData({ ...data, ProductImage: e.target.value })}
                />
              </div>
              <p className="text-danger">{errors.ProductImage}</p>
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
                  onChange={(e) => setData({ ...data, ProductWarranty: e.target.value })}
                />
              </div>
              <p className="text-danger">{errors.ProductWarranty}</p>
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
                  onChange={(e) => setData({ ...data, ProductPrice: e.target.value })}
                />
              </div>
              <p className="text-danger">{errors.ProductPrice}</p>
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
                  onChange={(e) => setData({ ...data, ProductWeight: e.target.value })}
                />
              </div>
              <p className="text-danger">{errors.ProductWeight}</p>
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
                  onChange={(e) => setData({ ...data, ProductCategory: e.target.value })}
                />
              </div>
              <p className="text-danger">{errors.ProductCategory}</p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              <button
                className="btn btn-success"
                onClick={handleAdd}
              >
                Add Product
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      </div>
    </>
  );
}

export default ProductAdd;
