import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export default function MainLayout({ children }: any) {
  const navigate = useNavigate();
  var [loading,setLoading] = useState<boolean>(true);
  const { userState, setUserState } = useContext<any>(GlobalContext);
  useEffect(() => {
    async function ax(){
      setLoading(true);
      console.log(userState.token)
      try{
       const {data} =  await axios.post("http://localhost:3001/me",
       {
        "token": userState.token,
    }).then(r => r);
      if (!data) {
        navigate('/account/signin');
      }
      if (data.status !== "admin") {
        navigate('/account/signin');
        
      }

      } catch(error){
        navigate('/account/signin');
      } finally{
        setLoading(false);
      }
      
    }
    ax();
  })

  return loading ? <><div style={{marginTop:"100px"}}>loading</div></> : children
}


