import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [handle, setHandle] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log("id : " + id);
    fetch(`http://localhost:3003/product/${id}`)
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error(res);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setHandle(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const handleGoBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <>
      <div className="card mt-20" style={{ width: "18rem" }} align="center">
        <img
          src={handle.ProductImage}
          className="card-img-top"
          alt="..."
          width="75%"
        />
        <div className="card-body" align="center">
          <h5 className="card-title" align="center">
            Name : {handle.ProductName}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" align="center">
          Warranty : {handle.ProductWarranty}
          </li>
          <li className="list-group-item" align="center">
            Category : {handle.ProductCategory}
          </li>
          <li className="list-group-item" align="center">
            Price : {handle.ProductPrice}
          </li>
          <li className="list-group-item" align="center">
          Weight : {handle.ProductWeight}
          </li>
        </ul>
        <button className="btn btn-primary mt-2" onClick={handleGoBack}>
          Back
        </button>
      </div>
    </>
  );
  
}

export default ProductDetails;
