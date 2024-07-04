import { createContext, useEffect, useState } from "react";
import localData from "../../db/data.json";
import { useTranslation } from "react-i18next";
import { dataType_card } from "../components/module";

interface props {
    children: JSX.Element
}
interface sizeType {
    size:string,
    capacity:string,
    calories:string
  }
  interface dataType {
      id: number,
      name: string,
      img: string,
      category: string,
      subcategory: string,
      type: string,
      sizes: sizeType[]
  }
  interface props {
    coffee:dataType[]
  }
const defaultValue = { /* Your default context values here */ 
    
};
export const GlobalContext=createContext(defaultValue);

export const  GlobalProvider = ({ children }:any) => {

    const { i18n } = useTranslation();

    
    const [data, setData] = useState(localData);
    const [userState, setUserState] = useState(JSON.parse(localStorage.getItem("userState") || "{}"));
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem("darkLightMode") || "false"));
    const [langMode, setLangMode] = useState(localStorage.getItem("langMode") || "en");
    //add to card
    const [cards, setCards] = useState<dataType_card[]>(JSON.parse(localStorage.getItem("cards") || "[]"));
    //basket
    const [fillBasket,setFillBasket]=useState<number[]>(JSON.parse(localStorage.getItem("fillBasket") || "[]"));
    //wishlist
    const [wishlist,setWishlist]=useState<number[]>(JSON.parse(localStorage.getItem("wishlist") || "[]"));

    useEffect(() => {
       localStorage.setItem("userState", JSON.stringify(userState)) 
    },[userState])

    useEffect(() => {

        localStorage.setItem("darkLightMode", JSON.stringify(mode));

    },[mode])

    useEffect(() => {
        
        localStorage.setItem("langMode", langMode);
        i18n.changeLanguage(langMode=="undefined" ?'en':langMode );
    },[langMode])

    useEffect(() => {
     
      localStorage.setItem("cards", JSON.stringify(cards))  
    },[cards])

    useEffect(() => {
    
       localStorage.setItem("fillBasket", JSON.stringify(fillBasket)) 
    },[fillBasket])

    useEffect(() => {

       localStorage.setItem("wishlist", JSON.stringify(wishlist))
    },[wishlist])
    
    

    return (
        <GlobalContext.Provider value={{ data, setData, userState, setUserState,mode, setMode,langMode, setLangMode,cards, setCards,fillBasket,setFillBasket,wishlist,setWishlist  }}>
            {children}
        </GlobalContext.Provider>
    );
}

 
