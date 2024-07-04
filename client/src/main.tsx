import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../src/assets/style.css'
import '../src/assets/index.css' // for tailwind
import { GlobalProvider } from './context/GlobalState.tsx'
import './i18next/İ18next.tsx'
import { ToastContainer } from 'react-toastify'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <GlobalProvider >
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"/>
    <App />
    
    </GlobalProvider>
  </>
)
