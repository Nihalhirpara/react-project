import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="category" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="Stainless Steel" name="category" />
          <span className="checkmark"></span>Stainless Steel
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="Aluminium" name="category" />
          <span className="checkmark"></span>Aluminium
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="Combo Pack" name="category" />
          <span className="checkmark"></span>Combo Pack
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="Family Pack" name="category" />
          <span className="checkmark"></span>Family Pack
        </label>
      </div>
    </div>
  );
}

export default Category;