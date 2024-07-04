import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Route, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { BsCartPlus, BsCartPlusFill } from "react-icons/bs";
import { dataType_card } from "../../components/module";
import { toast } from "react-toastify";

interface sizeType {
  size: string;
  capacity: string;
  calories: string;
}
interface dataType {
  id: number;
  name: string;
  img: string;
  category: string;
  subcategory: string;
  type: string;
  sizes: sizeType[];
}
interface props {
  coffee: dataType[];
}
export default function Menu() {
  // global Context data
  const { data, cards, setCards, fillBasket, setFillBasket,wishlist,setWishlist } =
    useContext(GlobalContext);

  const { categoryName } = useParams();
  

  const subCategory_Food = [
    "Hot Breakfast",
    "Oatmeal & Yogurt",
    "Bakery",
    "Lunch",
    "Snacks & Sweets",
  ];

  const subCategory_AtHomeCoffee = ["Whole Bean", "VIA® Instant"];
  const subCategory_Merchandise = ["Cold Cups", "Tumblers", "Mugs", "Other"];

  // add to card

  function addToCartFunc(item: dataType) {
    if (cards.find((card: dataType_card) => card.id === item.id)) return;
    setCards((prev: dataType_card[]) => [...prev, { ...item, count: 1 }]);

    setFillBasket((prev: number[]) => [...prev, item.id]);
    toast.success("The product has been added to the basket!");
  }

  function addToWishlistFunc(item: dataType) {
    if (cards.find((card: dataType_card) => card.id === item.id)) return;
    setWishlist((prev: number[]) => [...prev, item.id]);
    toast.success("The product has been added to the wishlist!");
  }

  return (
    <menu className=" px-4 md:px-24  flex mb-12 mt-16 md:mt-20 lg:mt-24   z-30 py-4  ">
      {/* left title */}
      <aside className=" w-1/4 hidden lg:block ">
        <h2 className="text-xl font-bold ">Drinks</h2>
        {data.coffee.map((item: dataType, index: number) => {
          let subcategoryWritten = false;

          for (let i = index - 1; i >= 0; i--) {
            if (item.subcategory === data.coffee[i].subcategory) {
              subcategoryWritten = true;
              break;
            }
          }
          if (!subcategoryWritten && item.subcategory != undefined) {
            return (
              <NavLink
                to={`/menu/${item.subcategory}`}
                key={item.id}
                className="leading-10 text-gray-500 block"
              >
                {item.subcategory}
              </NavLink>
            );
          }
        })}
        {/* Food */}
        <h2 className="text-xl font-bold mt-4 mb-2">Food</h2>

        {subCategory_Food.map((item, index) => {
          return (
            <NavLink
              to={`/menu/${item}`}
              key={index}
              className="leading-10 text-gray-500 block"
            >
              {item}
            </NavLink>
          );
        })}
        {/*AtHomeCoffee */}
        <h2 className="text-xl font-bold mt-4 mb-2">At Home Coffee</h2>

        {subCategory_AtHomeCoffee.map((item, index) => {
          return (
            <NavLink
              to={`/menu/${item}`}
              key={index}
              className="leading-10 text-gray-500 block"
            >
              {item}
            </NavLink>
          );
        })}

        {/* Merchandise */}
        <h2 className="text-xl font-bold mt-4 mb-2">Merchandise</h2>

        {subCategory_Merchandise.map((item, index) => {
          return (
            <NavLink
              to={`/menu/${item}`}
              key={index}
              className="leading-10 text-gray-500 block"
            >
              {item}
            </NavLink>
          );
        })}
      </aside>
      {/* right title */}
      <section className="w-full lg:w-3/4 ">
        <h2 className="text-3xl font-bold ">Menu</h2>
        <h3 className="text-2xl font-bold border-b border-gray py-4 me-28  w-full">
          Drinks
        </h3>
        <div className="w-full flex flex-wrap">
          {!categoryName
            ? //  Category Datalaria
              data.coffee.map((item: dataType, index: number) => {
                let subcategoryWritten = false;

                for (let i = index - 1; i >= 0; i--) {
                  if (item.subcategory === data.coffee[i].subcategory) {
                    subcategoryWritten = true;
                    break;
                  }
                }
                if (!subcategoryWritten && item.subcategory != undefined) {
                  return (
                    <NavLink
                      to={`/menu/${item.subcategory}`}
                      key={index}
                      className="w-full md:w-1/2  flex  justify-start items-center space-x-4 my-4"
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="rounded-full object-cover h-20 w-20  lg:h-28 lg:w-28"
                      />
                      <span className="text-lg">{item.subcategory}</span>
                    </NavLink>
                  );
                }
              })
            : // SubCategory datalari
              data.coffee
                .filter((item: dataType) => item.subcategory === categoryName)
                .map((item: dataType, index: number) => {
                  return (
                    <div
                      key={index}
                      className="w-full lg:w-1/2 flex justify-start items-center  space-x-4 my-4  "
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="rounded-full object-cover h-28 w-28"
                      />
                      <div className="flex flex-col justify-start items-start space-y-4">
                        <span className="text-md lg:text-lg">{item.name}</span>
                        <div className="flex space-x-4 text-2xl">
                          <button onClick={() => addToCartFunc(item)}>
                            {fillBasket.includes(item.id) ? (
                              <BsCartPlusFill />
                            ) : (
                              <BsCartPlus />
                            )}
                          </button>
                          {/* wishlist */}
                          <button onClick={() => addToWishlistFunc(item)}>
                            {wishlist.includes(item.id) ? (
                              <IoIosHeart /> 
                            ) : (
                              <IoIosHeartEmpty />
                            )}
                          </button>
  
                          <button>
                            
                          </button>
                          {/* <button><IoIosHeartEmpty /></button> */}
                          <NavLink
                            to={`../details/${item.id}`}
                            className={" text-[16px] bg-[#1A3B33] text-white duration-300 px-2 py-1 rounded-xl hover:text-white hover:bg-green-700"}
                          >
                            read more
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
        </div>
      </section>
    </menu>
  );
}
