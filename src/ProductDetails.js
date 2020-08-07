import React from 'react';
import { useParams } from 'react-router';

function ProductDetails() {
    const {productid} = useParams();
  return (
    <div>
      Welcome to Product Details of {productid}
    </div>
  );
}

export default ProductDetails;
