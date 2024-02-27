import { Link, NavLink } from "react-router-dom";
import logo from "./assets/images/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { useLogin } from "./LoginContext";

function Navbar() {
  const navigate = useNavigate();
  const {isLoggedIn, logout}=useLogin();
  
  return (
    <div className="backdrop-blur-lg py-0 text-gray-900 bg-gray-50 fixed w-full z-50 top-0">
      <nav className="flex items-center container mx-auto">
        <div class="logo">
          <img src={logo}>
          </img>
        </div>
        <ul className="nav list-none flex justify-center items-center ml-auto gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/product">Product</Link>
          </li> */}
          {isLoggedIn ? (
            <li>
            <Link to="/login/admin" className="page-scroll">
              Product
            </Link>
          </li> 
          ) : (
            <li>
            <Link to="/product" className="page-scroll">
              Product
            </Link>
          </li> 
          )}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
          {/* <li>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </li> */}
          {isLoggedIn ? (
            <li style={{ marginTop: '10px' }}>
              <div>
                <button onClick={logout} className="btn btn-primary">
                  Logout
                </button>
                
              </div>
            </li>
          ) : (
            <li style={{ marginTop: '10px' }}>
              <div>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;