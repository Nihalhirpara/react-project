import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AdminPdetails() {
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

  const handleEdit=(id)=>{
    // alert(id);
    navigate("/admin/edit/" + id);
  }

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete the product?");

    if (confirmDelete) {
       // User confirmed, proceed with the delete request
    fetch(
      "http://localhost:3003/product/"+id,
      {
        method: "DELETE",
      }
      ).then((res) => {
        // Handle success or error response
        navigate("/login/admin");
      });
    } else {
      // User canceled, do nothing or handle accordingly
    }
  }

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
          <li>
        <button className="btn btn-primary" onClick={(e)=>handleEdit(handle._id)}> Edit</button>
        <button className="btn btn-primary" onClick={(e)=>handleDelete(handle._id)}> Delete</button>
        <button className="btn btn-primary mt-2" onClick={handleGoBack}>
          Back
        </button>
        </li>
        </ul>
      </div>
    </>
  );
  
}

export default AdminPdetails;
