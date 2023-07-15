import React, { useEffect, useState } from 'react'
import { getOrderItemsOfRestuarant } from '../services/APIservice';

function OredersForRestuarant() {

  const [order,setOrder] = useState()
  const restuarant = JSON.parse(localStorage.getItem("rest"));
  // const [rest,setRest] = useState()
  useEffect(() => {
    // const restId = JSON.parse(localStorage.getItem("rest"));

    // console.log(rest[0].id)
    restuarant && getOrderItemsOfRestuarant(restuarant.id).then((res) => setOrder(res));
  }, []);

  return (
    <div>
      <div>
        <div className=" w-full text-gray-500 bg-blue-300/30 border  font-extrabold z-30  ">
          <p className="text-3xl p-2 ml-3">Orders</p>
        </div>
      </div>
      <div>order</div>

      <div className="grid grid-cols-1 m-3 md:grid-cols-2 items-center justify-center sm:grid-cols-1 lg:grid-cols-3 pt-4 gap-6">
        {order &&
          order.map((item) => (
            <div
              key={item.id}
              className=" bg-gray-50 rounded-lg   shadow-md cursor-pointer
                hover:scale-[1.03] duration-500 relative "
              // onClick={(e) => showDetail(e, item.id)}
            >
              <img
                id="detail"
                className="w-full h-[250px]  object-cover rounded-t-lg cursor-pointer "
                src={item.food.image}
                alt=""
              />
              <div className="absolute top-0 h-[50px] w-full  bg-black/50 rounded-t-lg  ">
                <p className=" m-2 text-center  text-2xl text-white capitalize font-bold">
                  {item.food.name}
                  {item.restuarant.name}
                  {}
                  {/* {item.category.title} */}
                </p>
              </div>

              <div className="flex justify-between items-center  py-3 px-2 rounded-b-lg">
                <div className="flex gap-2 items-center">
                  <p
                    id="cartButton"
                    // onClick={() => handeleAddToBasket(item)}
                    className="text-green-600  bg-white rounded 
                                font-bold duration-300 p-2 "
                  >
                    {/* <FaTrash
                      id="cartButton"
                      size={28}
                      title="Delete"
                      className="font-extrabold  text-yellow-500 hover:text-blue-500 "
                    />{" "} */}
                    {item.status}
                  </p>

                  <button id="favButton" className=" p-2 border-2 rounded">
                    {/* <FaEdit
                      id="favButton"
                      size={28}
                      className="text-red-500 font-extrabold hover:text-red-600"
                      // onClick={() => {
                      //   editFood(item.id);
                      // }}
                    /> */}
                  </button>
                  {""}
                </div>

                <div className="">
                  <span className="text-white    rounded-lg bg-orange-600 text-xl p-1 font-bold">
                    {item.price} ETB
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default OredersForRestuarant