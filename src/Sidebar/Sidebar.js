import Category from "./Category/Category";

import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar bg-white">
        {/* <div className="logo-container">
          <h1>🛒</h1>
        </div> */}
        <Category handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;