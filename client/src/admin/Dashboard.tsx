import React, { useEffect, useId, useRef, useState } from 'react'
import admin from '../../src/assets/images/admin.jpg'
import { dataType } from '../components/module'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';


interface Size{
    
    capacity:HTMLInputElement | null ,
    calories:HTMLInputElement | null  
    
}
interface type_ref{
    name: HTMLInputElement | null,
    img: HTMLInputElement | null,
    category: HTMLInputElement | null,
    subcategory: HTMLInputElement | null,
    type: HTMLInputElement | null   ,
    sizes: {
        Short: Size;
        Tall: Size;
        Grande: Size;
        Venti: Size;
    }    
  }

export default function Dashboard() {
    const [product,setProduct]=useState({})

    const uniqueId = uuidv4();
    const inputRef=useRef<type_ref>({
        name: null,
        img: null,
        category: null,
        subcategory: null,
        type: null,
        sizes:{
            Short:{
                calories:null,
                capacity:null,
            },
            Tall:{
                calories:null,
                capacity:null
            },
            Grande:{
                calories:null,
                capacity:null
            },
            Venti:{
                calories:null,
                capacity:null
            },
        }

    })
    const sizes=['Short','Tall','Grande','Venti']
    
    // useEffect(() => {
        
        
        
    //     const newProduct = { 
    //         ...product,
    //         id:uniqueId,
    //         [inputRef?.current?.name?.name as keyof type_ref]: inputRef?.current?.name?.value,
    //         [inputRef?.current?.img?.name as keyof type_ref]: inputRef?.current?.img?.value,
    //         [inputRef?.current?.category?.name as keyof type_ref]: inputRef?.current?.category?.value,
    //         [inputRef?.current?.subcategory?.name as keyof type_ref]: inputRef?.current?.subcategory?.value,
    //         [inputRef?.current?.type?.name as keyof type_ref]: inputRef?.current?.type?.value,
    //         sizes:[
    //             {
    //                 "size": "Short",
    //                 "calories":inputRef?.current?.sizes.Short.calories?.value,
    //                 "capacity":inputRef?.current?.sizes.Short.capacity?.value,
    //             },
    //             {
    //                 "size": "Tall",
    //                 "calories":inputRef?.current?.sizes.Tall.calories?.value,
    //                 "capacity":inputRef?.current?.sizes.Tall.capacity?.value,
    //             },
    //             {
    //                 "size": "Grande",
    //                 "calories":inputRef?.current?.sizes.Grande.calories?.value,
    //                 "capacity":inputRef?.current?.sizes.Grande.capacity?.value,
    //             },
    //             {
    //                 "size": "Venti",
    //                 "calories":inputRef?.current?.sizes.Venti.calories?.value,
    //                 "capacity":inputRef?.current?.sizes.Venti.capacity?.value,
    //             },
    //         ]


    //      };
    //     setProduct(newProduct);

    // },[inputRef?.current?.name?.value])
    // write all data
    const [products,setProducts]=useState([])
    const [editCodition,setEditCondition]=useState(JSON.parse(localStorage.getItem("Edit") || "false"))
    useEffect(() => {
        localStorage.setItem("Edit", JSON.stringify(editCodition));
    },[editCodition])

    const fetchData=async () => {
        await axios.get(`http://localhost:3004/coffee`)
        .then(res => setProducts(res.data))
    }

    useEffect(() => {
        fetchData()
    },[])

    const removeProduct=async (id:string)=>{
        toast.success("Product deleted successfully");
        await axios.delete(`http://localhost:3004/coffee/${id}`)

    }
    const [updaatedProductId,setUpdatedProductId]=useState("")
    const editProduct= (id:string)=>{
        setEditCondition(true)
        setUpdatedProductId(id)
    }

    


    

    const  SendDataFun=async (e:React.FormEvent)=>{
        
        e.preventDefault()
        editCodition ? toast.success("Product updated successfully") : toast.success("Product added successfully")
        const newProduct = { 
            ...product,
            id:uniqueId,
            [inputRef?.current?.name?.name as keyof type_ref]: inputRef?.current?.name?.value,
            [inputRef?.current?.img?.name as keyof type_ref]: inputRef?.current?.img?.value,
            [inputRef?.current?.category?.name as keyof type_ref]: inputRef?.current?.category?.value,
            [inputRef?.current?.subcategory?.name as keyof type_ref]: inputRef?.current?.subcategory?.value,
            [inputRef?.current?.type?.name as keyof type_ref]: inputRef?.current?.type?.value,
            sizes:[
                {
                    "size": "Short",
                    "calories":inputRef?.current?.sizes.Short.calories?.value,
                    "capacity":inputRef?.current?.sizes.Short.capacity?.value,
                },
                {
                    "size": "Tall",
                    "calories":inputRef?.current?.sizes.Tall.calories?.value,
                    "capacity":inputRef?.current?.sizes.Tall.capacity?.value,
                },
                {
                    "size": "Grande",
                    "calories":inputRef?.current?.sizes.Grande.calories?.value,
                    "capacity":inputRef?.current?.sizes.Grande.capacity?.value,
                },
                {
                    "size": "Venti",
                    "calories":inputRef?.current?.sizes.Venti.calories?.value,
                    "capacity":inputRef?.current?.sizes.Venti.capacity?.value,
                },
            ]


         };
        setProduct(newProduct);
  
        
        
        editCodition ?
        await axios.put(`http://localhost:3004/coffee/${updaatedProductId}`,newProduct)
        :   await axios.post("http://localhost:3004/coffee", { ...newProduct })
    
        setEditCondition(false)
    }

  return (
    <div className='px-10 mt-[75px] md:mt-20 lg:mt-24 bg-[#1A3B33] text-white min-h-screen'>

        <div className='w-full h-full flex '>
        {/* Left section */}
        <section  className='w-1/4 flex flex-col justify-start items-start bg-gray-700 min-h-screen p-10'>
            <h1 className='text-center text-2xl w-full mb-6 border-b-2'>Admin Panel</h1>
            <div className='flex items-center space-x-4 w-full '>
                <img src={admin} alt="" className='w-14 h-14 rounded-full  object-cover ' />
                <h2>Admin</h2>
            </div>
            <ul className='w-full my-8 text-xl '>
                <li className='border-b-2 '>Home</li>



                <li >
                <p className='border-b-2 mt-4'>Menu</p>
                <ul className='text-xl ps-2 '>
                    <li className='mt-2'>Drinks</li>
                    <li className='mt-2'>Food</li>
                    <li className='mt-2'>At Home Coffee</li>
                    <li className='mt-2'>Merchandise</li>
                </ul>
                </li>
                <li className='border-b-2 mt-4'>Rewards</li>
                <li className='border-b-2 mt-4'>Gift Cards</li>
                <li className='border-b-2 mt-4'>Find a Store</li>

            </ul>
        </section>
        {/* Right section */}
        
        <section className='w-3/4  min-h-screen p-10 flex justify-center items-center flex-col'>
                        {/* add product */}
                        <form onSubmit={SendDataFun} className='border-2 w-1/2 p-10 text-xl my-4'>
  
  <div >
    <h3 className='text-yellow-500 text-center  '>Add new Product</h3>
      <span className='text-xl'>Name:</span>
      <input required type="text"  name='name'   ref={(el) => (inputRef.current.name  = el)}  className='bg-transparent w-full px-2 border'  />
  </div>
  <div>
      <span className='text-xl'>Image(url):</span><input required type="text"  name="img" ref={(el) => (inputRef.current.img  = el)}     className='bg-transparent w-full px-2 border'/>
  </div>
  <div>
      <span className='text-xl'>Category:</span><input required type="text"  name="category"  ref={(el) => (inputRef.current.category  = el)}    className='bg-transparent w-full px-2 border'/>
  </div>
  <div>
      <span className='text-xl'>Subcategory:</span><input required type="text"  name="subcategory"  ref={(el) => (inputRef.current.subcategory  = el)}    className='bg-transparent w-full px-2 border'/>
  </div>
  <div>
      <span className='text-xl'>Type:</span><input required type="text"  name="type"  ref={(el) => (inputRef.current.type  = el)}    className='bg-transparent w-full px-2 border'/>
  </div>
  <div>
      <p className='text-xl text-center mt-4'>Sizes:</p>
      
      {
          sizes.map((item,index)=>{
          return <div key={index}>
              <p className='text-lg border-b'>{item}</p>
              <div className='flex space-x-1 my-2'>                    
                  <span className='text-lg'>capacity:</span><input required type="number"  name="capacity"  ref={(el) => (inputRef.current.sizes[item as keyof typeof inputRef.current.sizes].capacity = el)}    className='bg-transparent w-14 px-2 border'/>
                  <span className='text-lg'>calories:</span><input required type="number"  name="calories"  ref={(el) => (inputRef.current.sizes[item as keyof typeof inputRef.current.sizes].calories  = el)}    className='bg-transparent w-14 px-2 border'/>
              </div>
          </div>
              
          })
      }


          
     
  </div>

  <div className='text-center mt-4'>
      {editCodition ?<button className='bg-green-700 px-4 py-2 rounded-lg'>Update Product</button> : <button className='bg-green-700 px-4 py-2 rounded-lg' >Add Product</button> }
  </div>
</form>
        {/* Watch All Product */}
       {
               
             !editCodition &&  <table className='border w-full'>
                <tr className=''>
                    <th className='border'>name</th>
                    <th className='border'>img</th>
                    <th className='border'>category</th>
                    <th className='border'>subcategory</th>
                    <th className='border'>type</th>
                    <th className='border'>Chance</th>

                </tr>
            {
                products?.map((item: dataType) => {
                    return (
                        <tr className='border'>
                            <td className=' p-2 border  '><p className='w-12'>{item.name}</p></td>
                            <td className=' p-2 border overflow-hidden'><img src={item.img} alt="" width={'50px'} /></td>
                            <td className=' p-2 border overflow-hidden'><p className='w-12'>{item.category}</p></td>
                            <td className='p-2 border overflow-hidden'><p className='w-12 '>{item.subcategory}</p></td>
                            <td className=' p-2 border overflow-hidden'><p className='w-12'>{item.type}</p></td>
                            <td className='  flex justify-between p-2 '>
                                <button  className=" text-2xl bg-yellow-500" onClick={()=>editProduct(item.id.toString())}><MdEdit/></button>
                                <button  className=" text-2xl bg-red-500" onClick={()=>removeProduct(item.id.toString())}><MdDelete/></button>
                            </td>

                        </tr>
                    )
                        
                })
            }
            </table>
        }
     
            

        </section>
        </div>

    </div>
  )
}
