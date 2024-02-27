import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/404";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductEdit from "./components/ProductEdit";
import Products from "./pages/Products";
import Loginscreen from "./pages/Loginscreen";
import Admin from "./pages/Admin";
import AdminPdetails from "./components/AdminPdetails";
import ProductAdd from "./components/ProductAdd";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { LoginProvider } from "./components/LoginContext";

const App = () => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin/edit/:id" element={<ProductEdit />} />
          <Route path="/admin/add" element={<ProductAdd />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/login/admin" element={<Admin />} />
          <Route path="/admin/:id" element={<AdminPdetails />} />
          
          </Route>
          <Route>
          <Route path="/login" element={<Loginscreen />} />
          </Route>
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
};

export default App;
