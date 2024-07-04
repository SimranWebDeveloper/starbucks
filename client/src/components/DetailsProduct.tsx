import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';
import { LuGlassWater } from 'react-icons/lu';
import { CgGlassAlt } from 'react-icons/cg';
import { TbCup } from 'react-icons/tb';
import { Box, MenuItem, TextField } from '@mui/material';
// import detailBg from '../assets/images/detailBg2.webp'

interface sizeType {
  size:string,
  capacity:string,
  calories:string
}
interface dataType {
  id: number | undefined,
  name: string,
  img: string,
  category: string,
  subcategory: string,
  sizes: sizeType[]
}
const DetailsProduct = () => {
  const {id}=useParams()
  const [detailProduct,setDetailProduct]=useState<dataType>(
    {
    id:undefined,
    name: "",
    img:"",
    category:"",
    subcategory:"",
    sizes: [
      {
        size:"",
        capacity:"",
        calories:""
      },
    ]
  })
  const [sizeIndex,setSizeIndex]=useState<number>(0)

    // global Context data
    const {data}=useContext<any>(GlobalContext);
    
    useEffect(()=>{
      data.coffee.map((item:dataType)=>{
        if (item.id==id) {
          setDetailProduct(item)
          
        }
      })
      
    },[id])
    console.log('detailProduct.sizes[sizeIndex].calories',detailProduct.sizes);
    

    const currencies = [
      {
        value: 'USD',
        label: 'Extra Water',
      },
      {
        value: 'EUR',
        label: 'Light Water',
      },
      {
        value: 'BTC',
        label: 'No Water',
      },
      {
        value: 'JPY',
        label: ' Water',
      },
    ];

    const espresso = [
      {
        value: 'USD',
        label: 'Signature Espresso Roast',
      },
      {
        value: 'EUR',
        label: 'Blone Espresso Roast',
      },
      {
        value: 'BTC',
        label: 'Decaf Espresso Roast',
      },
      {
        value: 'JPY',
        label: '1/3 Decaf Espresso Roast',
      },
      {
        value: 'JPY',
        label: '1/2 Decaf Espresso Roast',
      },
      {
        value: 'JPY',
        label: '2/3 Decaf Espresso Roast',
      },
    ];

    const [shots, setShots] = React.useState(7);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setShots(parseInt(value, 10)); // Ensure numeric value
    
  };
    
  console.log('shots',Number((detailProduct.sizes[sizeIndex].calories).slice(0)));



  
  return (
    <>{
      detailProduct.id!=undefined &&
    <div className='   my-12 '>
    <div className='px-4 md:px-24  w-full h-[30rem] md:h-[20rem] bg-[#1C3B35] flex flex-col md:flex-row justify-center  items-center text-white '>
      <div className='w-full md:w-1/2 overflow-hidden  flex justify-center items-center '>
        <img src={detailProduct.img} alt="" className=' h-72 overflow-hidden rounded-full    ' />
      </div>
      <div className='w-full md:w-1/2  text-center md:text-start p-4'>
        <h2 className='text-4xl font-bold leading-10  '>Pistachio Frappuccino® Blended Beverage</h2>
        <p className='text-2xl text-gray-400 leading-10'>
          <span className='bg-green-700 px-2 py-1 text-white rounded-lg mx-1'>
          {  Number((detailProduct.sizes[sizeIndex].calories).slice(0))}
          </span>
           calories  </p>
      </div>
    </div>
    {/* -------------------- */}
    <div className='px-4 md:px-24     my-4  flex flex-col md:flex-row justify-center     '>
      {/* size option */}
      <div className='w-full md:w-1/2 overflow-hidden  p-4'>
    <div className='md:w-3/4'>
    <div className=' text-center md:text-start'>
        <h2 className='text-2xl font-semibold leading-10 '>Size options</h2>
        <div className='border-b-4 border-[#D2EBE3] w-full '></div>
        </div>
        <div className='my-4   flex justify-center md:justify-start item-center'>

         {
          detailProduct.sizes.map((item,index)=>{
            return  <button key={index} className={`${index==sizeIndex && 'bg-[#D2EBE3]'} ease-linear duration-500  rounded-full w-14 h-14 flex justify-center items-center me-1`} onClick={()=>setSizeIndex(index)}><TbCup className={`text-${index+1}xl`} /></button>

          })
         }
          
        </div>
    </div>
      </div>
      {/* Customized recipe */}
      <div className='w-full md:w-1/2  text-center md:text-start p-4'>
         <div className='md:w-3/4 '>
         <h2 className='text-2xl font-semibold leading-10 '>Customized recipe</h2>
        <div className='border-b-4 border-[#D2EBE3] w-full mb-4 '></div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className=' '>
        <TextField
          id="outlined-select-currency"
          select
          label="Add-ins"
          defaultValue="EUR"
          helperText="Please select your currency"
          color="success"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
      <TextField
          id="outlined-select-currency"
          select
          label="Espreso & Short Options"
          defaultValue="EUR"
          helperText="Please select your currency"
          color="success"
        >
          {espresso.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
      <TextField
      label="Shots"
      type="number"
      value={shots}
      onChange={handleChange}
      InputLabelProps={{ shrink: true }} 
      

    />
      </div>

    </Box>
         </div>
    {/* ------------button */}
         <div className='my-8'><button className='bg-[#1C3B35] text-white text-2xl font-bold px-5 py-3  rounded-full shadow-xl'>Customise</button></div>
      <div className='my-8'><button className=' text-[#1C3B35] hover:bg-gray-100 duration-300 border-2 border-black text-xl  px-3 py-1  rounded-full'>Reset to standard recipe</button></div>
      </div>

          
    </div>
    
    {/* text */}
    <div className='px-4 md:px-24     my-4  bg-[#1C3B35]  py-10 flex  items-center  '>
      <div className='flex flex-col space-y-4'>
        <div><span className=' text-yellow-600 text-sm border rounded-md px-1 border-yellow-500'>200★ item</span></div>
        <p className='text-sm text-gray-400 font-semibold'>Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.</p>
        <p className='text-sm font-semibold text-white'><span>15</span> calories, <span>0g</span> sugar, <span>0g</span> fat</p>
        <div><button className='text-white px-3 py-1 hover:bg-[#102722] duration-300 rounded-2xl border'>Full nutrition & ingredients list</button></div>
      </div>
    </div>
    </div>
  }
  </>
  )
}

export default DetailsProduct