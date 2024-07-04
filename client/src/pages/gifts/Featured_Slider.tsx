import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from 'react-router-dom';
import { Skeleton } from '@mui/material';


interface type_dataArr{
  arr:string[],
  title:string,
  navigation:boolean,

}
interface props{
  dataArr:type_dataArr
}
const Featured_Slider = (data:props) => {
  console.log(data);
  
  const {arr,title,navigation} = data.dataArr
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId); // Cleanup function to avoid memory leaks
  }, []);

  setTimeout(() => {
    setLoading(false)
  }, 4000);
    let settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll:  1,
        initialSlide: 0,
        centerMode: false,
        prevArrow: arr.length>=4 ? undefined :<></>  , 
        nextArrow: arr.length>=4 ? undefined : <></>, 
     
    
        
      
        responsive: [
          {
            breakpoint: 1224,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              prevArrow: arr.length>=4 ? undefined :<></>  , 
              nextArrow: arr.length>=4 ? undefined : <></>, 
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              prevArrow: arr.length>=3 ? undefined :<></>  , 
              nextArrow: arr.length>=3 ? undefined : <></>, 

            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              infinite: true,
              prevArrow: undefined  , 
              nextArrow: undefined, 
 
            }
          }
        ]
      };

  
  return (
    
    <div className="slider-container px-10 md:px-24 py-8  ">
      <h2 className='px-4 text-sm font-semibold text-gray-600 mb-2'>{title}</h2>
      <Slider {...settings} className='your-slider-container' >

      {
        
        arr.map((item:any,index:number)=>{
          return( <NavLink to={"/"} className={'p-1  '} key={index}>
          {loading ?  
          <div className='flex h-36 md:h-48 '>
              <Skeleton variant="rounded"  sx={{height: { xs: '144px',  md: '192px',  },}}  width={250}  className=''   />
              <Skeleton variant="circular" width={42} height={42}  className='' sx={{ margin:1 }} />
          </div>
          :
          <img src={item} alt=""  className='h-36 md:h-48  object-cover rounded-2xl hover:shadow-slate-300 hover:shadow-lg hover:-translate-y-2 duration-300  '/>
        }

        </NavLink>)
        })
      }
        
      </Slider>
    </div>
  ) 
}

export default Featured_Slider