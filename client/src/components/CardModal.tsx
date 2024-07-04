import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { dataType, dataType_card, propsdataType } from './module';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
interface prop{
    openCard:boolean ,
    // setOpenCard:React.Dispatch<React.SetStateAction<boolean>>
}


export default function CardModal({openCard}:prop) {
    
    const {cards, setCards,fillBasket,setFillBasket,userState}=useContext<any>(GlobalContext)
    const navigate=useNavigate();
 
    function chanceCardFunc(param:string,chancedCard:dataType_card) {

        let updatedCards: dataType_card[] = [];

        switch (param) {
          case "increase":              
                chancedCard.count=chancedCard.count+1; 
              break;
          case "decrease":
              if (chancedCard.count>1)  chancedCard.count=chancedCard.count-1; 
              break;
        }
        console.log('chancedCard.count',chancedCard.count);
        updatedCards = cards.map((item:dataType_card) =>
            item.id === chancedCard.id ? chancedCard : item
          );

        setCards(
            (prevCards:dataType_card[]) => {
            console.log('prevCards',prevCards);
            
            prevCards.map((item, index) => {
              if (item.id === chancedCard.id) {
                prevCards[index] = chancedCard;
              }
            })
            return prevCards;
          }
        );
        setCards(updatedCards);
          console.log('Card seivesideyisilen darda',cards);
          
      }

      function removeCardFunc(chancedCard:dataType_card) {
        const updatedCards = cards.filter((item:dataType_card) => item.id !== chancedCard.id);
        setCards(updatedCards);
        setFillBasket((prev:number[])=>{
          return prev.filter((item)=>item!==chancedCard.id)
        })
        toast.success("The product has been removed from the basket !")
      }

      const[totalPrice,setTootalPrice]=useState<number>(0)
      useEffect(() => {
        calcTotalPrice()
      },[cards])
      

      function calcTotalPrice() {
        const total=cards.reduce((a: number, item: dataType_card) => a + (item.count*(Number((item.sizes[0].capacity).split(' ')[0]))), 0);
        // const total=0
        setTootalPrice(total)
        console.log('total',total);

      }

      function buyNowFunc() {
        debugger
        if (!userState.token) {
          toast.warning("Please sign in")
          navigate("/account/signin")
          return
        }
        if (!cards.length) {
          toast.warning("Please add product")
          return
        };
        setFillBasket([])
            setCards([])
            toast.success("The purchase was successfully implemented! !")
        
      }
    


    
  return (
    <div className=''>

    {cards.map((item:dataType_card, index:number) => {
                return (
                  <div  key={index} className='w-full  my-2   px-10'>
                    <div className='flex justify-start items-center  space-x-4 border-b-2 w-5/6'>
                        <img src={item.img} alt="" className='rounded-full object-cover h-36 w-36 ' />
                        <div className='flex flex-col justify-start items-start space-y-4'>
                            <span className='text-lg'>{item.name}</span>
                            <div className='flex justify-center items-center space-x-4 text-3xl'>
                                <button onClick={()=>chanceCardFunc('increase',item)}>+</button>
                                <button onClick={()=>chanceCardFunc('decrease',item)}>-</button>
                                <button onClick={()=>removeCardFunc(item)}><MdDelete/></button>
                                <p className='text-lg'>Count:<span >{item.count}</span></p>
                                <p className='text-lg'>Price: 
                                <span className='bg-red-500 px-2 py-1 rounded-2xl'>
                                  {parseInt((item.sizes[0].capacity).split(' ')[0]) * item.count
}
                                  $</span></p>
                                <p></p>
                            </div>
                        </div>
                            
                        
                      </div>
                  </div>
                );
              })
            }
                    <div className='flex flex-col space-y-4 justify-center items-center my-4'>
            <p className=''>Total price: <span className='bg-red-500 px-2 py-1 rounded-2xl'>  {totalPrice} $</span></p>
             
             <button className='text-xl px-8 py-2 rounded-2xl bg-red-500' onClick={buyNowFunc}>Buy Now</button>
        </div>
              </div>
  )
}
