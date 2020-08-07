import React from 'react';
import { Outlet } from 'react-router';

function Product() {
  return (
    <div>
      <h1>Welcome to Product </h1>
      <hr />
      <div>
        <Outlet />
      </div>
      
    </div>
  );
}

export default Product;
