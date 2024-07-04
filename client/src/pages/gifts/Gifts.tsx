import React, { useContext, useState } from 'react'
import Featured_Slider from './Featured_Slider'
import grougiftcard from '../../assets/images/group-gift-cards.webp'
import { NavLink } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch';

import fs_1 from '../../assets/images/fs_1.png'
import fs_2 from '../../assets/images/fs_2.avif'
import fs_3 from '../../assets/images/fs_3.avif'
import fs_4 from '../../assets/images/fs_4.avif'
import fs_5 from '../../assets/images/fs_5.avif'
import fs_6 from '../../assets/images/fs_8.avif' 
import fs_7 from '../../assets/images/fs_10.jpg'
import fs_8 from '../../assets/images/fs_11.avif'
import fs_9 from '../../assets/images/fs_12.avif'
import fs_10 from '../../assets/images/fs_13.avif'
import fs_11 from '../../assets/images/fs_14.avif'
import fs_12 from '../../assets/images/fs_15.avif'
import fs_13 from '../../assets/images/fs_16.avif'
import fs_14 from '../../assets/images/fs_17.avif'
import fs_15 from '../../assets/images/fs_18.avif'

import  sbling_1  from '../../assets/images/sbling_1.webp';
import  sbling_2  from '../../assets/images/sibling_2.avif';
import  pet_1  from '../../assets/images/pet_1.webp';
import  pet_2  from '../../assets/images/pet_2.avif';
import  pet_3  from '../../assets/images/pet_3.webp';
import letter from '../../assets/images/letter.webp'
import { GlobalContext } from '../../context/GlobalState';


export default function Gifts() {
  const {mode, setMode}=useContext(GlobalContext)


  return (
    <div className='mt-16 lg:mt-24 '>


     <Featured_Slider dataArr={{
          arr:[fs_1,fs_2,fs_3,fs_4,fs_5,fs_6,fs_7,fs_8,fs_9,fs_10,fs_11,fs_12,fs_13,fs_14,fs_15],
          title:"FEATURED",
          navigation:true,
       
       
        }}/>

      <div className='ml-24 h-24 bg-gray-300 flex items-center rounded-s-lg space-x-4 my-4'>
        <img src={grougiftcard} alt="" className='h-16 px-2' />
        <p>New! Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
      </div>

      <div className='ps-24 h-44 bg-[#D2EBE3] '>
        <div className='flex items-start flex-col lg:flex-row lg:items-center  py-6 lg:py-12 '>

          <h4 className='text-lg md:text-xl lg:text-2xl  font-bold pe-4'>Received a gift card?</h4>
          <div className='flex item-start md:items-center flex-col md:flex-row '>
            <p className='me-3 text-gray-700 pe-4 my-2'>Earns 2★Stars per $1</p>
            <div className='flex text-sm md:text-md lg:text-lg'>
              <button className='me-3 rounded-full border border-black font-semibold px-3 py-1  flex-nowrap text-black duration-300 hover:bg-[#bbd6ce]'>Add or Reload</button>
              <button className='me-3 rounded-full border border-black font-semibold px-3 py-1 flex-nowrap bg-black text-white duration-300 hover:bg-[#bbd6ce]'>Check Balance</button>
            </div>
          </div>

        </div>
        <p className={'text-end text-green-700   font-semibold '}>
        <NavLink to={'/'} >
            Card Terms & Conditions
            <LaunchIcon  sx={{fontSize: '16px' ,margin:'5px'}}/>
        </NavLink>
        </p>
      </div>
      {/* SIBLING APPRECIATION | 4/10 */}
        <Featured_Slider dataArr={{
          arr:[sbling_1,sbling_2],
          title:"SIBLING APPRECIATION | 4/10",
          navigation:false,
         

        }}/>

        <Featured_Slider dataArr={{
          arr:[pet_1,pet_2,pet_3],
          title:"PET DAY | 4/11",
          navigation:false,
      
        }}/>





<Featured_Slider dataArr={{
  arr:[pet_1,pet_2,pet_3,fs_4,fs_5],
  title:"BIRTHDAY",
  navigation:false,

}}/>
<Featured_Slider dataArr={{
          arr:[pet_1,pet_2,pet_3,fs_4,fs_5],
          title:"THANK YOU",
          navigation:false,
      
        }}/>
<Featured_Slider dataArr={{
  arr:[pet_1,pet_2,pet_3],
  title:"CELEBRATION",
  navigation:false,
  
}}/>

        <Featured_Slider dataArr={{
          arr:[pet_2,pet_3],
          title:"SPRING",
          navigation:false,
      
        }}/>

<Featured_Slider dataArr={{
          arr:[pet_1,pet_2,pet_3],
          title:"APPRECIATION",
          navigation:false,
      
        }}/>

        <Featured_Slider dataArr={{
          arr:[pet_1,pet_3],
          title:"EARTH MONTH",
          navigation:false,
      
        }}/>

<Featured_Slider dataArr={{
          arr:[fs_1,pet_1,pet_2,pet_3],
          title:"ADMIN APPRECIATION | 4/24",
          navigation:false,
      
        }}/>

        <Featured_Slider dataArr={{
          arr:[sbling_1, pet_1,pet_2,pet_3],
          title:"ENCOURAGEMENT",
          navigation:false,
      
        }}/>

<Featured_Slider dataArr={{
          arr:[sbling_2,pet_1,pet_2,pet_3],
          title:"AFFECTION",
          navigation:false,
      
        }}/>

        <Featured_Slider dataArr={{
          arr:[sbling_1, pet_1,pet_2,pet_3],
          title:"WORKPLACE",
          navigation:false,
      
        }}/>

<Featured_Slider dataArr={{
          arr:[sbling_2,sbling_1, pet_1,pet_2,pet_3],
          title:"ANYTIME",
          navigation:false,
      
        }}/>



<div className={` px-10 md:px-24 h-[520px] lg:h-80  bg-[#F9F9F9] flex items-center rounded-s-lg space-x-4 my-4 ${mode  ? 'bg-gray-800 text-slate-50' :'bg-white text-black' }`}>
  <div className='  flex items-start lg:items-center justify-start flex-col lg:flex-row '>
    <div className='w-full max-w-96'>
    <img src={letter} alt="" className='w-full h-72 lg:max-h-[440px] min-h-64 object-cover p-4' />
    </div>
         <div className='p-4 w-full lg:w-1/4'>
        <h4 className='font-semibold text-lg lg:text-2xl'>Business gifting — simplified</h4>
        <p className='text-sm py-3 text-gray '>Bulk send physical or digital Starbucks Cards to gift, reward, incentivize, or show appreciation towards your customers, clients and team members. Minimum 15 cards per order.</p>
        <button className='me-3 rounded-full border border-black  px-3 py-1 font-semibold text-sm  flex-nowrap text-black duration-300 hover:bg-[#D4D3D1]'>Shop Now <LaunchIcon  sx={{fontSize: '16px' ,margin:'5px'}}/></button>
        </div>
        </div>
      </div>





<div className={` px-10 md:px-24 h-56 bg-[#ECEBE9] flex items-center rounded-s-lg space-x-4 my-4 ${mode  ? 'bg-gray-800 text-slate-50' :'bg-white text-black' }`}>
  <div className=''>
        <h4 className='font-semibold  text-sm lg:text-md'>GIFT CARD SUPPORT</h4>
        <p className='py-4  lg:text-sm '>Use the links below to manage eGifts you have sent or received, or view our full Card Terms & Conditions.</p>
        <div>
        <button className='me-3 rounded-full border border-black my-1 px-3 py-1 font-semibold text-sm flex-nowrap text-black duration-300 hover:bg-[#D4D3D1]'>eGift support <LaunchIcon  sx={{fontSize: '16px' ,margin:'5px'}}/></button>
        <button className='me-3 rounded-full border border-black my-1 px-3 py-1 font-semibold text-sm flex-nowrap text-black duration-300 hover:bg-[#D4D3D1]'>See Terms & Conditions <LaunchIcon  sx={{fontSize: '16px' ,margin:'5px'}}/></button>
        <button className='me-3 rounded-full border border-black my-1 px-3 py-1 font-semibold text-sm flex-nowrap text-black duration-300 hover:bg-[#D4D3D1]'>eGift FAQs <LaunchIcon  sx={{fontSize: '16px' ,margin:'5px'}}/></button>
        </div>
        </div>
      </div>

    </div>
  )
}
