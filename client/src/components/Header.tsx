import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { GlobalContext } from "../context/GlobalState";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { BsBagCheckFill } from "react-icons/bs";
import CardModal from "./CardModal";
import az from "../assets/images/azerbaijan.png";
import en from "../assets/images/united-states.png";
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const data = [
  {
    id: 0,
    name: "Menu",
    path: "/menu",
  },
  {
    id: 1,
    name: "Rewards",
    path: "/rewards",
  },
  {
    id: 2,
    name: "Gift",
    path: "/gift",
  },
];
interface typeUser {
  name:string,
  email:string,
  status:string,
  token:string,

}
interface props  {
  mode?:boolean,
  setMode?:React.Dispatch<React.SetStateAction<boolean>>,
  langMode?:string,
  setLangMode?:React.Dispatch<React.SetStateAction<string>>,
  userState?:typeUser,
  setUserState:React.Dispatch<React.SetStateAction<typeUser>>,
}




export default function Header() {
  const { t } = useTranslation();

  const { mode, setMode, langMode, setLangMode, userState,setUserState }:any =
  useContext(GlobalContext);
  
    
  const [active, setActive] = useState(10);

  const handleClick = (id: number) => {
    setActive(id);
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      console.log("click", isOpen);
      const target = e.target as Node;
      const hamburger = document.getElementById("hamburger");
      console.log(target, hamburger);

      if (!hamburger?.contains(target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  // Language dropdown

  const handleChange = (event: SelectChangeEvent) => {
    setLangMode(event.target.value);
  };

  const handleChangeHamburger = (item: string) => {

    setLangMode(item);
  };

  const [openCard, setOpenCard] = useState(false);

  return (
    <div className="scroll fixed w-full top-0 z-50 h-[83px] ">
      <header
        className={`  px-10 border-b border-gray-300     shadow-md ${
          mode ? "bg-gray-800 text-slate-50" : "bg-white  text-black"
        }`}
      >
        <div className="   h-[72px] md:h-[83px] lg:h-[99px] w-full  flex justify-between items-center   ">
          <div className="flex items-center justify-between space-x-4  ">
            {/* logo */}
            <NavLink to={"/"}>
              <img src="logo.svg" alt="Logo" />
            </NavLink>
            {/* menu  Rewards Gift Cards*/}
            <div className="hidden lg:flex items-center justify-between space-x-4 ">
              {data.map((elem, index) => (
                <NavLink
                  to={elem.path}
                  key={index}
                  onClick={() => handleClick(index)}
                  className=" h-[72px] md:h-[83px] lg:h-[99px] flex items-center relative "
                >
                  {t(`header.${elem.name}`)}
                  {active === index && (
                    <div className="h-[8px] w-full bg-green-700 absolute bottom-0"></div>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center  space-x-4  ">
            {/* find now */}
            <NavLink
              to={"/store-locator"}
              onClick={() => handleClick(3)}
              className="h-[72px] md:h-[83px] lg:h-[99px] hidden lg:flex items-center relative me-12  "
            >
              <LocationOnIcon />
              {t("header.Find")}
              {active === 3 && (
                <div className="h-[8px] w-full bg-green-700 absolute bottom-0"></div>
              )}
            </NavLink>
            {/* sign in */}
            {userState.name ? (
              <div>
                <FormControl sx={{ m: 1, minWidth: 100, fontSize: "1rem" }}>
                 

                  <Select
                    sx={{ height: "2.5rem", color: mode ? "white" : "black" }}
                    labelId="1"
                    id="demo-simple-select-secondary"
                    value={userState.name}
                    
                    onChange={handleChange}
                    renderValue={(value) => value}
                  >
                    <MenuItem >
                     <button onClick={()=>setUserState({})}><LogoutIcon />  Log out</button>
                    </MenuItem>
                    {userState.status === "admin" && (
                      <MenuItem >
                        <AdminPanelSettingsIcon />
                        <NavLink to="/admin">admin</NavLink>
                      </MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            ) : (
              <NavLink
                to={"/account/signin"}
                className="hidden lg:block rounded-full border px-3 py-1 bg-white text-black hover:bg-gray-50"
              >
                {t("header.SignIn")}
              </NavLink>
            )}

            {/* join now */}
            {!userState.name && (
              <NavLink
                to={"/account/create"}
                className="hidden lg:flex rounded-full  border px-3 py-1 bg-black text-white"
              >
                {t("header.Joinnow")}
              </NavLink>
            )}
            {/* Theme Mode */}
            <button
              className="text-2xl hidden lg:flex"
              onClick={() => setMode((mode: boolean) => !mode)}
            >
              {mode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </button>
            {/* Lang Mode */}
            <div className="hidden lg:flex overflow-x-hidden ">
              <FormControl sx={{ m: 1, minWidth: 100, fontSize: "1rem" }}>
                <InputLabel id="demo-simple-select-error-label">lan</InputLabel>

                <Select
                  sx={{ height: "2.5rem", color: mode ? "white" : "black" }}
                  labelId="1"
                  id="demo-simple-select-secondary"
                  value={langMode=='undefined'?'en':langMode}
                  label="Sin"
                  onChange={handleChange}
                  renderValue={(value) => value}
                >
                  <MenuItem value="az">
                    <img src={az} alt="" className="w-8 h-8 mr-2" /> Aze
                  </MenuItem>
                  <MenuItem value="en">
                    <img src={en} alt="" className="w-8 h-8 mr-2" /> Eng
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {/* Hamburger menu */}
          <div className="lg:hidden w-full relative  ">
            <div
              id="hamburger"
              className="h-[72px] md:h-[83px] lg:h-[99px]   flex items-center  justify-end"
            >
              <div className="  h-6 w-6 " onClick={() => setIsOpen(!isOpen)}>
                <div
                  className={`${
                    isOpen ? "origin-top-left rotate-45 " : ""
                  } hamburger_span transform  duration-300 mb-1 ${
                    !mode ? "bg-black text-slate-50" : "bg-white text-black"
                  }`}
                ></div>
                <div
                  className={`${
                    isOpen ? "invisible" : ""
                  } hamburger_span transform   my-1 ${
                    !mode ? "bg-black text-slate-50" : "bg-white text-black"
                  }`}
                ></div>
                <div
                  className={`${
                    isOpen
                      ? "origin-bottom-left -rotate-45 translate-y-[1px] "
                      : ""
                  } hamburger_span transform  duration-300 mt-1 ${
                    !mode ? "bg-black text-slate-50" : "bg-white text-black"
                  }`}
                ></div>
              </div>
              <div
                className={` border-t   ${
                  mode ? "bg-gray-800 text-slate-50" : "bg-white text-black"
                } absolute transform top-[72px] md:top-[83px] lg:top-[99px] right-0 w-full     h-screen  ease-linear transition-all duration-[700ms] z-30 ${
                  isOpen ? "translate-x-[10%]" : "translate-x-[130%]"
                }`}
              >
                <div className="flex flex-col m-8 space-y-8 ">
                  <NavLink to={"/menu"}>{t("header.Menu")}</NavLink>
                  <NavLink to={"/rewards"}>{t("header.Rewards")}</NavLink>
                  <NavLink to={"/gift"}>{t("header.Gift")}</NavLink>
                </div>
                <hr />
                <div className=" flex flex-col m-8  ">
                  <div className="flex space-x-4 ">
                    {/* sign in */}
            {userState.name ? (
              <div className={`flex space-x-4 ${mode ? " bg-gray-800 text-slate-50" : "bg-white text-black"} `}>
                                     <button onClick={()=>setUserState({})}><LogoutIcon />  Log out</button>
                                     {userState.status === "admin" && (
                      <div >
                        <AdminPanelSettingsIcon />
                        {userState.status==="admin" && <NavLink to="/admin">admin</NavLink>}
                      </div>
                    )}
          


              </div>
            ) : (
              <NavLink
                to={"/account/signin"}
                className="rounded-full border px-3 py-1 bg-white text-black hover:bg-gray-50"
              >
                {t("header.SignIn")}
              </NavLink>
            )}

            {/* join now */}
            {!userState.name && (
              <NavLink
                to={"/account/create"}
                className="rounded-full  border px-3 py-1 bg-black text-white"
              >
                {t("header.Joinnow")}
              </NavLink>
            )}


                {/* theme mode */}
                    <button
                      className="text-2xl"
                      onClick={() => setMode((mode: boolean) => !mode)}
                    >
                      {mode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                    </button>
                    {/* Lang Mode */}
                  </div>
                  <div className="mt-4 space-x-4 ">
                    <button onClick={() => handleChangeHamburger("az")}>
                      <img src={az} alt="" className="w-8 h-8 mr-2" /> Aze
                    </button>
                    <button onClick={() => handleChangeHamburger("en")}>
                      <img src={en} alt="" className="w-8 h-8 mr-2" /> Eng
                    </button>
                  </div>
                  <NavLink
                    to={"/store-locator"}
                    onClick={() => handleClick(3)}
                    className="h-[72px] md:h-[83px] lg:h-[99px] flex items-center relative me-12"
                  >
                    <LocationOnIcon />
                    {t("header.Find")}
                    {active === 3 && (
                      <div className="h-[8px] w-full bg-green-700 absolute bottom-0"></div>
                    )}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="text-end text-2xl text-green-700 sticky -translate-x-6 translate-y-2  z-40  ">
        <button onClick={() => setOpenCard(!openCard)}>
          <BsBagCheckFill />
        </button>
      </div>

      <div
        className={` border-t   bg-[#1A3B33] text-white sticky    overflow-y-scroll transform -translate-y-8  top-[72px] md:top-[83px] lg:top-[99px] w-full h-[87vh] scroll-y-0  ml-0    ease-linear transition-all duration-[1500ms]   ${
          openCard ? "translate-x-[0%] " : "translate-x-[130%] "
        }`}
      >
        {openCard && (
          <CardModal openCard={openCard} />
        )}
      </div>
    </div>
  );
}
// min-h-screen h-auto
