import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GlobalContext } from '../context/GlobalState'
export default function AppLayout() {
  const {mode}=useContext(GlobalContext)
  return (
    <div className={`${mode  ? 'bg-gray-800 text-slate-50' :'bg-white text-black' } `} >
      <Header/>
      <main >
        <Outlet/>
      </main>      
      <Footer/>
    </div>
  )
}


