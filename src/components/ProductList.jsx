import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

function ProductList() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   getProduct().then((res) => {
  //     setProduct(res);
  //   });
  // }, []);

  return (
    <div className=" shadow-sm w-full  p-2 ">
      <div className="flex justify-between items-center text-3xl font-bold bg-orange-200 text-white px-2 py-2">
        <div className=" font-mono  ">Products</div>
        <div>
          <AiOutlinePlus
            onClick={() => navigate("/newproduct")}
            className="m-2 font-extrabold"
          />
        </div>
      </div>
      <div className="  ml-2 mt-3 h-fit">
        {product.map((product) => (
          <div key={product.id}>
            <h1
              className=" font-bold text-xl px-2 py-2 bg-blue-300 text-green-600 rounded-sm "
              onClick={() => navigate(`/products/${product.id}`)}
            >
              {product.title}
            </h1>
            
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default ProductList;
