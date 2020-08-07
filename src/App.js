import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Product from './Product';
import ProductDetails from './ProductDetails';
import ProductHome from "./ProductHome";

function NotFound() {
  return <div>Not Found</div>
}

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome to App</h2>
      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="About">About</Link> {' '}
        <Link to="Product">Product</Link> {' '}
        <Link to="/Product/Mobile">Mobile</Link> { ' ' }
        <Link to="/Product/Laptop">Laptop</Link>
        <button onClick={() =>{
          navigate('/About')
        }}>
          Display About Page
        </button>

      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="Product" element={<Product />}>
         <Route path="/" element={<ProductHome />}></Route>
         <Route path=":productid" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
