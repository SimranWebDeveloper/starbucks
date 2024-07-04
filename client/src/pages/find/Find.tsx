import {  SelectChangeEvent,
} from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import { LuSearch } from "react-icons/lu";
import { GlobalContext } from "../../context/GlobalState";

export default function Find() {
  const {mode, setMode}=useContext(GlobalContext)



  return (
    <div className=" mt-[70px] md:mt-20 lg:mt-24">
      <div className="w-full block lg:flex  lg:flex-row justify-between items-start  border-[#1B3B33]  ">
        <div className="flex flex-col justify-between lg:h-[750px]">
            {/* input */}
            <div className="px-10 flex  justify-between items-center  order-1 w-full ">

              <div className="border-b-2 flex   w-4/5 ">
                <input type="text" className={`w-full border-none focus:outline-none ${mode  ? 'bg-gray-800 text-slate-50' :'bg-white text-black' }`} />
              <button className=" text-2xl text-gray-700   hover:text-[#1B3B33] duration-300 mt-2">
              <LuSearch  className={`${mode  ? 'bg-gray-800 text-slate-50' :'bg-white text-black' }`}/>
              </button>
              </div>
              <button className="text-[#1B3B33] border-[#254c42] border-2 rounded-3xl px-3 py-1 my-2  hover:bg-gray-200 duration-300 ">
                Filter
              </button>

            </div>
            
            {/* text */}
            <div className="order-3 lg:order-2 hidden lg:block ">
            <div className=" w-full   ">
              <div className="hover:bg-gray-200 duration-300 px-10 py-8 ">
                <h2 className="text-2xl font-semibold">
                  We are unable to access your exact location
                </h2>
                <p className="text-sm text-gray-600 my-2">
                  To find a Starbucks store, use the search feature, navigate using
                  the map, or turn on location services.
                </p>
              </div>
            </div>
            <div className="px-10 mb-16 space-y-3 py-8 text-sm ">
              <NavLink to={"/"} className="text-[#1B3B33]  block">
                Privacy Notice <LaunchIcon sx={{ fontSize: 20 }} />
              </NavLink>
              <NavLink to={"/"} className="text-[#1B3B33]  block">
                Term of Use <LaunchIcon sx={{ fontSize: 20 }} />
              </NavLink>
              <NavLink to={"/"} className="text-[#1B3B33]  block">
                Do Not Share My Personal Information{" "}
                <LaunchIcon sx={{ fontSize: 20 }} />
              </NavLink>
            </div>
            </div>

        </div>
      
        {/* map */}
        <div className=" w-full lg:w-3/5 order-2 lg:order-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48625.607289735526!2d49.76982585597062!3d40.38446613956447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8c33c62a3f%3A0x77807ca915edd570!2zWWFzYW1hbCwgQmFrxLE!5e0!3m2!1saz!2saz!4v1713185562055!5m2!1saz!2saz"
            width="100%"
            height="750"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        {/* text */}
        <div className="order-3 lg:order-2 block  lg:hidden">
            <div className=" w-full   ">
              <div className="hover:bg-gray-200 duration-300 px-10 py-8 ">
                <h2 className="text-2xl font-semibold">
                  We are unable to access your exact location
                </h2>
                <p className="text-sm text-gray-600 my-2">
                  To find a Starbucks store, use the search feature, navigate using
                  the map, or turn on location services.
                </p>
              </div>
            </div>
            <div className="px-10 mb-16 space-y-3 py-8 text-sm ">
              <NavLink to={"/"} className="text-[#1B3B33]  block">
                Privacy Notice <LaunchIcon sx={{ fontSize: 20 }} />
              </NavLink>
              <NavLink to={"/"} className="text-[#1B3B33]  block">
                Term of Use <LaunchIcon sx={{ fontSize: 20 }} />
              </NavLink>
              <NavLink to={"/"} className="text-[#1B3B33]  block">
                Do Not Share My Personal Information{" "}
                <LaunchIcon sx={{ fontSize: 20 }} />
              </NavLink>
            </div>
        </div>

      </div>
    </div>
  );
}
