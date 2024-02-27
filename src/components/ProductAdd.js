  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";

  const axiosInstance = axios.create({
    baseURL:'http://localhost:3003/admin',
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

    const handleadd = async() => {
      console.log(data);
      const response = await axiosInstance.post("/add", data);
      navigate('/login/admin');
      console.log("Response : ", response);
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
                    onChange={(e) => setData({ ...data, ProductName: e.target.value })}
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
                    onChange={(e) => setData({ ...data, ProductImage: e.target.value })}
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
                    onChange={(e) => setData({ ...data, ProductWarranty: e.target.value })}
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
                    onChange={(e) => setData({ ...data, ProductPrice: e.target.value })}
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
                    onChange={(e) => setData({ ...data, ProductWeight: e.target.value })}
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
                    onChange={(e) => setData({ ...data, ProductCategory: e.target.value })}
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
                  onClick={handleadd}
                >
                  Add Product
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }

  export default ProductAdd;
